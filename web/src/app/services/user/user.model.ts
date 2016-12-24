export class User {

  constructor(private firstName: string, private lastName: string) {

  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  login(password: string): boolean|void {
    if (password === 'foo') {
      return true;
    }
  }

}

export default User
