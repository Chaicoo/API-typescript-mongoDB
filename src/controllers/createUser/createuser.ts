import validator from "validator";
import { User } from "../../models/user";
import { HttpRequest, HttpResponse } from "../protocols";
import {
    CreateUserParams,
    ICreateUserRepository,
    ICreateuserController,
} from "./protocols";

export class CreateUserController implements ICreateuserController {
    constructor(private readonly createUserRepository: ICreateUserRepository) {}

    async handle(
        httpRequest: HttpRequest<CreateUserParams>
    ): Promise<HttpResponse<User>> {
        try {
            const requiredFields = [
                "firstName",
                "lastName",
                "email",
                "password",
            ];

            for (const field of requiredFields) {
                if (!httpRequest.body?.[field as keyof CreateUserParams]?.length) {
                    return {
                        statusCode: 400,
                        body: `Missing param: ${field}`,
                    };
                }
            }

            const emailIsValid = validator.isEmail(httpRequest.body!.email);

            if (!emailIsValid) {
                return {
                    statusCode: 400,
                    body: "Invalid email",
                };
            }

            if (!httpRequest.body) {
                return {
                    statusCode: 400,
                    body: "Missing body",
                };
            }

            const user = await this.createUserRepository.createUser(
                httpRequest.body!
            );

            return {
                statusCode: 201,
                body: user,
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: "Internal server error",
            };
        }
    }
}
