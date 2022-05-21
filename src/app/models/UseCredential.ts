export interface IUserCredential {
  username: string;
  password: string;
  rememberMe?: boolean;
}

export class UserCredential implements IUserCredential {
  constructor(
    public username: string,
    public password: string,
    public rememberMe?: boolean) {
    this.rememberMe = this.rememberMe || false;
  }
}
