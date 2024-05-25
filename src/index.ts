import { Router } from 'express' //importar router
import usersrouter from './routes/usersRoute';
import express from 'express';
import salesrouter from './routes/salesRoutes';
import checklistrouter from './routes/checklistRoutes';
const routes = express() // metodo router

routes.use('/users',usersrouter)
routes.use('/sales',salesrouter)
routes.use('/checklist',checklistrouter)


export default routes