import { createUserData, authenticateUser, updateUserData} from "../controller"

const userRoutes = app =>{
    app.post('/createUser', createUserData)
    app.post('/loginUser', authenticateUser)
    app.put('/updateUser', updateUserData)
}

export{
    userRoutes
}