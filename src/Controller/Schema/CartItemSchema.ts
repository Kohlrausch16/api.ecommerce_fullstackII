import { number, object, string } from "yup";

export const validateCartItem = object().shape({
    cartId: string().required('Cart ID is a required field'),
    productId: string().required('Product ID is a required field'),
    qtd: number().required('Quantity ID is a required field').min(1, 'At least one unit 1 required')
});