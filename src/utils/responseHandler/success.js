export const Success = (res, error, statusCode, message, data) => {
    return res.status(statusCode).send({
        message,
        error,
        data
    })
}