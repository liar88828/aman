import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT | 5000
const app = express()


app.get('/', (req, res) => {
	return res.send('ok')
})

app.listen(port, () => {
	console.log('server is running in localhost: ' + port)
})
