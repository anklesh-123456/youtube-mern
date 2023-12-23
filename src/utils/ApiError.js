class ApiError extends  Error {
    constructor(
        statusCode,
        massage= "Something Went Wrong",
        errors = [],
        statck = ""
    ){
        super(massage)
        this.statusCode = statusCode
        this.data = null
        this.massage = massage
        this.sucess = false;
        this.errors = errors

        if (statck) {
            this.stack = statck
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}