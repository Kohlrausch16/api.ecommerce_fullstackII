import { object, string } from "yup"

export const validateClientAdress = object().shape({
    street: string().required('Street is a required field!'),
    number: string().required('House number is a required field!'),
    block: string().required('Block is a required field!'),
    city: string().required('City is a required field!'),
    state: string().required('State is a required field!')
});