import { teste } from "../controller"


const userRoutes = app =>{
    app.post('/createUser', teste)
}

export{
    userRoutes
}