import { string, object } from 'yup';

export const userDataSchema = object().shape({
  name: string().min(2).trim().notRequired(),
  email: string().email().notRequired()
});

export const userChangePasswordSchema = object().shape({
  currentPassword: string().min(8).required(),
  password: string().min(8).required(),
  passwordConfirm: string().min(8).required().test(
    'matching password', 
    "Password doesn't match",
    function(passwordConfirm) {
      return passwordConfirm ===this.parent.newPassword;
    })
});

export const loginSchema = object().shape({
  email: string().email().required(),
  password: string().min(8).required()
});

export const signupSchema = object().shape({
  email: string().email().required(),
  password: string().min(8).required(),
  username: string().trim().required(),
  passwordConfirm: string().min(8).required().test(
    'matching password', 
    "Password doesn't match", 
    function(passwordConfirm) {
      return passwordConfirm ===this.parent.password
    })
});