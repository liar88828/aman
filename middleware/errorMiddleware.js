const notFoundError = (req, res, next) => {
	const error = new Error(`Not Found - ${ req.originalUrl }`)
	res.status(404)
	next(error)
}

const errorhandler = (err, req, res, next) => {

	let statisCode = res.statusCode === 200 ? 500 : res.statusCode
	let message = err.message
	if ( err.name === 'CastError' && err.kind === 'ObjectId' ) {
		statisCode = 404
		message = 'Resource not found'
	}
	res.status(statisCode).json({
		message,
		stack: process.env.NODE_DEVELOPMENT === 'production' ? null : err.stack
	})


}
export { errorhandler, notFoundError }