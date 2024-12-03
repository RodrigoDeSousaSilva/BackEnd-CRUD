import {object, string, required, number, date, min, trim} from 'yup'

let validateUserData = object({
    name: string(). required('Este campo é obrigatório').trim(),
    //age: number().positive('idade invalida').integer('idade invalida'),
    email: string().email().trim(),
    password: string().min(8, 'Mínimo 8 caracteres').trim()
})

export {validateUserData}