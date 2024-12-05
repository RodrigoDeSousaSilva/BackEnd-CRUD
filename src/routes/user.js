import { createUserData } from "../controller"

const userRoutes = app =>{
    app.post('/createUser', createUserData)
    //app.post('/login', )
}

export{
    userRoutes
}