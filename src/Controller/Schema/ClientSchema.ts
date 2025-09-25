import { bool, object, string } from "yup";
import { IsEmail, isPhoneNumber } from "../../../node_modules/class-validator/types/index";


export const validateClient = object().shape({
    firstName: string().required('First name is a required field'),
    lastName: string().required('Last name is a required field'),
    cpf: string().min(11, 'CPF must contain at least 11 digits').max(11, 'CPF must contain at most 11 digits').required('CPF is a required field!'),
    phoneNumber: string().min(11, 'Phone number must contain at least 11 digits').max(11, 'Phone number must contain at most 11 digits').required('Phone number is a required field!'),
    email: string().required("Email is a required field"),
    password: string().required('Password is a required field'),
    activeStatus: bool().default(true),
    adressId: string().nullable(),
    cartId: string().nullable(),
    userId: string().nullable()
});