//1
import {asyncHandler} from " "


const registerUser = asyncHandler(async(req,res)=>{
  res.status(200).json({
    message:"ok"
  })
})

export {registerUser} // u will have to use this name anywhere you import it