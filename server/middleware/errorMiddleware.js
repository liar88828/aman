const notFoundError = (req, res, next) => {
	const error = new Error(`Not Found - ${ req.originalUrl }`)
	res.status(404)
	next(error)
}

const errorhandler = (err, req, res, next) => {

	let staticCode = res.statusCode === 200 ? 500 : res.statusCode
	let message = err.message
	if ( err.name === 'CastError' && err.kind === 'ObjectId' ) {
		staticCode = 404
		message = 'Resource not found'
	}
	res.status(staticCode).json({
		message,
		stack: process.env.NODE_DEVELOPMENT === 'production' ? null : err.stack
	})


}
export { errorhandler, notFoundError }