import { createUserData, authenticateUser, updateUserData, deleteUserData} from "../controller"

const userRoutes = app =>{
    app.post('/createUser', createUserData)
    app.post('/loginUser', authenticateUser)
    app.put('/updateUser', updateUserData)
    app.delete('/deleteUser', deleteUserData)
}

export{
    userRoutes
}