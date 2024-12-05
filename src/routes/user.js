import { createUserData, authenticateUser } from "../controller"

const userRoutes = app =>{
    app.post('/createUser', createUserData)
    app.post('/loginUser', authenticateUser)
}

export{
    userRoutes
}