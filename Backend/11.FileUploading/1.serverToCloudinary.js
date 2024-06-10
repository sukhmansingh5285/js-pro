/* most of the file handling isn't done on own server, their are specialized third party services for it or AWS
   Cloudinary is one of those third party services, 

   npm install cloudinary

*/ 


/* to store file in backend we need two packages -> multer, express-fileupload
    
strategy -> through multer we will let the file upload on local server
            through cloudinary we will put the file from local server(storage) to the cloudinary server

             multer's middleware than cloudinary's function than upload it
 */

import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

// save everything in .env, than access it. Configuration will give you the permission to upload file
cloudinary.config({
   cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME',
   api_key: 'process.env.CLOUDINARY_API_KEY',
   api_secret: 'process.env.CLOUDINARY_API_SECRET'
});


/* organizing the last function a bit, create a method, in method give me the parameter of the path of local file 
   than upload it if succesfully uploaded than unlink the file */ 

const uploadOnCloudinary = async(localFilePath) => {
   try {
      if(!localFilePath) return null
      //upload the file on cloudinary
      const response = await cloudinary.uploader.upload(localFilePath, {resouce_type: "auto"})
      // file has been uploaded, print the public url out of response object
      console.log("file is uploaded on cloudinary", response.url);
      return response;
      // file is on the server but didn't uploaded on the cloudinary, so unlink the file from the current server
   } catch (error) {
      fs.unlinkSync(localFilePath) 
      return null;
   }
}

/*
cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
{public_id: "olympic_flag"},
function(error, result) {console.log(result);});   
*/