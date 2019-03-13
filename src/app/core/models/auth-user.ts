export class AuthUser {
    constructor(public userName: string,
                public name: string,
                public token: string,
                public id: string,
                public expires: Date)
    {}
}
