import {object, string, required, number, date, min, trim} from 'yup'

let validateUserData = object({
    name: string(). required('Este campo é obrigatório').trim().matches(/^[^0-9]*$/, 'Nome não pode conter números.'),
    age: number().positive('idade invalida').integer('idade invalida'),
    email: string().email().trim(),
    password: string().min(8, 'Mínimo 8 caracteres').trim().matches(/^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/, 'Senha deve ter ao menos um caractere especial e algum numero.').required()

})

export {validateUserData}