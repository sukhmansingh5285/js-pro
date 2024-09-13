 // create
insertOne(data, options)
insertMany(data, options)





 db.students.insertOne({name: "Ram"})      
 db.students.insertMany([{name: "Shyam", age:12},{name:"Ganesh", age:45},{name: "Shankar", age: 54}])


 // Ordered option in insert command in MongoDB
 db.books.insertMany([{},{},{}], {ordered:false})