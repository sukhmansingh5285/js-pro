//update
updateOne(filter, data, options)
updateMany(filter, data, options)
replaceOne(filter, data, options)




db.students.updateOne({name:"Ram"}, {$set: {idCards:{hasPanCard: true, hasAdharCard:false}}})

db.students.updateMany({},{$set: {hobbies: ["Anime", "Cooking"]}})