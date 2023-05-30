import express from 'express'
import dotenv from 'dotenv'
import userRoutes from "./routes/userRoutes.js";
import { errorhandler, notFoundError } from "./middleware/errorMiddleware.js";

dotenv.config()

const port = process.env.PORT | 5000
const app = express()


app.get('/', (req, res) => {
	return res.send('ok')
})

app.use('/api/user', userRoutes)

app.use(errorhandler)
app.use(notFoundError)

app.listen(port, () => {
	console.log('server is running in localhost: ' + port)
})
