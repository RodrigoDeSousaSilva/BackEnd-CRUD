import { createUserData } from "../controller"


const userRoutes = app =>{
    app.post('/createUser', createUserData)
}

export{
    userRoutes
}