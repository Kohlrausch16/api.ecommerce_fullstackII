import yup, { object, string } from "yup";

export const validateCredentials = object().shape({
    email: string().email('Invalid email format').required('Email is a required field!'),
    password: string().required('Password is a required field!')
});