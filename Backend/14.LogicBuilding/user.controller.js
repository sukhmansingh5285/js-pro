import { asyncHandler } from "../9.Custom api response & Error Handling/2.asyncHandler";

const registerUser = asyncHandler(async(req,res)=>{
  // get user detail from frontnd
  //validation - not empty
  //check if user already exist (by username, email)
  //check if user already exists: username, email
  //check for images and avatar
  //upload them to cloudinary, avatar
  //create user object, to put it in mongodb, and create entry in db
  //remove password and refresh token field from response
  //check for user creation
  //return res

  const{fullName, email, username, password} = req.body;
  
})


export {registerUser}