'use strict'

const { StatusCodes, ReasonPhrases } = require('../utils/httpStatusCode')

const StatusCode = {
    FORBIDDEN: 403,
    CONFLICT: 409
}

const ReasonStatusCode = {
    FORBIDDEN: 'Bad Request Error',
    CONFLICT: 'Conflict Error'
}

class ErrorResponse extends Error{

    constructor(message, status){
        super(message)
        this.status = status
    }
}

class ConflictRequestError extends ErrorResponse{

    constructor(message = ReasonStatusCode.CONFLICT, statusCode = StatusCode.FORBIDDEN){
        super(message, statusCode)
    }
}

class BadRequestError extends ErrorResponse{

    constructor(message = ReasonStatusCode.CONFLICT, statusCode = StatusCode.FORBIDDEN){
        super(message, statusCode)
    }
}

class AuthFailureError extends ErrorResponse{

    constructor(message = ReasonPhrases.UNAUTHORIZED, statusCode = StatusCode.UNAUTHORIZED){
        super(message, statusCode)
    }
}

class NotFoundError extends ErrorResponse{

    constructor(message = ReasonPhrases.NOT_FOUND, statusCode = StatusCode.NOT_FOUND){
        super(message, statusCode)
    }
}

module.exports ={
    ConflictRequestError,
    BadRequestError,
    AuthFailureError,
    NotFoundError
}
