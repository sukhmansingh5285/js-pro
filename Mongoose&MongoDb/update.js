//update
updateOne(filter, data, options)
updateMany(filter, data, options)
replaceOne(filter, data, options)




db.students.updateOne({name:"Ram"}, {$set: {idCards:{hasPanCard: true, hasAdharCard:false}}})

db.students.updateMany({},{$set: {hobbies: ["Anime", "Cooking"]}})



db.students.updateMany({},{$unset:{valueToUnset:""}}) // deleting a value in mongodb
db.students.updateMany({age:{$gte: 40}}, {$set: {isEligible: true}})