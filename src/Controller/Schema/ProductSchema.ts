import { array, boolean, number, object, string } from 'yup';

export const validateProduct = object().shape({
    name: string().required('Name is a required field!'),
    price: number().required('Price is a required field!'),
    height: number().required('Height is a required field!'),
    width: number().required('Width is a required field!'),
    length: number().required('Length is a required field!'),
    color: array().nullable(),
    description: string().required('Description is a required field!'),
    year: string().required('Year is a required field!'),
    stockQtd: number().required('Stock quantity is a required field!'),
    supplierId: string().required('Supplier is a equired field!'),
    status: boolean().default(true),
});