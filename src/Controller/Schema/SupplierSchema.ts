import { string, object } from "yup";

export const validateSupplier = object().shape({
    name: string().required("Name is a required field!"),
    email: string().required("Email is a required field!"),
    phone: string().required("Phone is a required field!"),
    cnpj: string().required("CNPJ is a required field!"),
    adressId: string().required("Adress is a required field!")
});