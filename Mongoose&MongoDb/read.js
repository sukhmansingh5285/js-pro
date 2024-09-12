//read
find(filter, options)
findOne(filter, options)







db.students.find();        db.students.find({});       db.students.find({}, {_id:false})

db.students.find({hobbies:"cooking"}) // for the array inside the database (refer to 3rd line of update.js)

db.students.find({'idCards.hasPanCard': true}) //use (''), if you are searching the nested objects
          