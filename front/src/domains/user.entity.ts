export type UserId = string;
export type UserName = string;
export type Email = string;
export type PhotoUrl = string;
export type UserRole = 'user' | 'guide' | 'lead-guide' | 'admin';
export type RegistrationData = {
  username: UserName;
  email: Email;
  password: string;
  passwordConfirm: string;
};
export type AuthenticateData = Omit<
  RegistrationData,
  'username' | 'passwordConfirm'
>;

export class User {
  constructor(
    readonly uid: UserId,
    readonly name: UserName,
    readonly email: Email,
    readonly photo: PhotoUrl,
    readonly role: UserRole,
  ) {}
}
