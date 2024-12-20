import {object, string, number} from 'yup'

let validateUserData = object({
    name: string().required('Este campo é obrigatório').trim().matches(/^[^0-9]*$/, 'Nome não pode conter números.'),
    age: number().positive('idade invalida').required('idade é obrigado').integer('idade invalida'),
    email: string().email('email invalido').required('email é obrigatório ').trim(),
    password: string().min(8, 'Mínimo 8 caracteres').trim().matches(/^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/, 'Senha deve ter ao menos um caractere especial e algum numero.').required()

})

let validateLogin = object({
    email: string().email('email invalido').trim().required('Este campo é obrigatório'),
    password: string().min(8, 'Mínimo 8 caracteres').trim().matches(/^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/, 'Senha deve ter ao menos um caractere especial e algum numero.').required()
})

let validateUpdate = object({
    id: number().positive().integer().required(),
    name: string().trim().matches(/^[^0-9]*$/, 'Nome não pode conter números.'),
    age: number().positive('idade invalida').integer('idade invalida'),
    email: string().email('email invalido').trim(),
    password: string().min(8, 'Mínimo 8 caracteres').trim().matches(/^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/, 'Senha deve ter ao menos um caractere especial e algum numero.')
})

let validateDelete = object({
    id: number().positive().integer().required(),
    email: string().required('email obrigatório').email('email invalido').trim(),
    password: string().required('senha obrigatória').min(8, 'Mínimo 8 caracteres').trim().matches(/^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/, 'Senha deve ter ao menos um caractere especial e algum numero.').required()
})

export {
    validateUserData, validateLogin, validateUpdate, validateDelete
}