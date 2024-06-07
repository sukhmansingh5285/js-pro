class ApiError extends Error {
  constructor(
    statusCode,
    message = "something went wrong",
    errors = [],
    stack = ""
  ){
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.message = message
    this.succes = false
    this.errors = errors
    

    if(stack){                 // might not make sense right now, just wrote it
      this.stack = stack
    } else{
      Error.captureStackTrace(this,this.constructor)
    }
  }
}


export {ApiError}