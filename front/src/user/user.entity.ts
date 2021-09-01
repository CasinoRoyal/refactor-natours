export type UserName = string;
export type Email = string;
export type PhotoUrl = string;
export type UserRole = 'user' | 'guide' | 'lead guide';

export class User {
  constructor(
    private readonly _name: UserName,
    private readonly _email: Email,
    private readonly _photo: PhotoUrl,
    private readonly _role: UserRole,
  ) {}

  get name(): UserName {
    return this._name;
  }

  get email(): Email {
    return this._email;
  }

  get photo(): PhotoUrl {
    return this._photo;
  }

  get role(): UserRole {
    return this._role;
  }


  updateName(): boolean { return false }
}
