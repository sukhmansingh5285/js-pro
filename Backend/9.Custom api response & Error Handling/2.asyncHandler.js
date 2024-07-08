// standard way to use all the functions for the api, as i will not have to write again and again for the try error block all the time
const ansyncHandler = (fn) => async(req, res, next) => {
  try {
    await fn(req, res,next)
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message
    })
  }
}


                            // Promise wala 

const asyncHandler = (requestHandler) =>{
  return (req, res, next) => {
    Promise.resolve(requestHandler(req,res,next)).
    catch((err) => next(err))
  }
}

req.status(statusCode || 401);

export {asyncHandler}