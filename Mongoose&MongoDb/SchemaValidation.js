//db.createCollection two things -> nameOfCollection & json, json has validator & validationSchema, validator has
// $jsonSchema, jsonSchema has required & properties, and 
db.createCollection("nonfiction", {
  validator:{
    $jsonSchema:{
      required:['name', 'price'],
      properties:{
        name:{
          bsonType:'string',
          description:'must be a string and required'
        },
        price:{
          bsonType:'number',
          description:'must be a number'
        }
      }
      
    }
  },
  validationAction:"error"
})