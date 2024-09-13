//read
find(filter, options)       //returns a cursor(list/array) pointer by which we can iterate, and we can apply js methods to it
findOne(filter, options)    //returns a single object







db.students.find();        db.students.find({});       db.students.find({}, {_id:false})
db.students.find({_id: ObjectId("")})  //to find something with the help of id

db.students.find({hobbies:"cooking"}) // for the array inside the database (refer to 3rd line of update.js)

db.students.find({'idCards.hasPanCard': true}) //use (''), if you are searching the nested objects
          
db.students.find().forEach((x)=>{printjson(x)})   // applying method of js on .find method

////////////////////////////////////////////////////Using operators//////////////////////////////////////////////////////////////////

db.students.find({age: {$lte:60}})
db.students.find({age: {$gt: 5, $lt: 19}})

/////////////////////////////////////////////////////Using Options///////////////////////////////////////////////////////////////////
db.students.find({},{name:1, _id:0}) // to get the list of only names