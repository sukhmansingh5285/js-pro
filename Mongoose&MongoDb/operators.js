//A.Comparison Operators

//Query Operators
//1. $eq
db.collection.find({ age: { $eq: 23 } });
//2. $ne
db.collection.find({ age: { $ne: 23 } });
//3. $gt
db.collection.find({ age: { $gt: 23 } });
//4. $lt
db.collection.find({ age: { $lt: 23 } });
//5. $gte
db.collection.find({ age: { $gte: 23 } });
//6. $lte
db.collection.find({ age: { $lte: 23 } });
//7. $in
db.collection.find({ age: { $in: [23, 55, 53] } });
//8. $nin
db.collection.find({ age: { $nin: [23, 55, 64] } });

//Logical Operators
//1. $and -> Joins query clauses with a logical AND
db.collection.find({ $and: [{ age: { $gt: 25 } }, { age: { $lt: 30 } }] });
//2. $or -> Joins query clauses with a logical OR
db.collection.find({ $or: [{ age: { $lt: 25 } }, { age: { $gt: 30 } }] });
//3. $not -> Inverts the effect of the query expression.
db.collection.find({ $age: { $not: { $gt: 25 } } });
//4. $nor -> Joins query clauses with a logical NOR
db.collection.find({ $nor: [{ age: { $lt: 25 } }, { age: { $gt: 30 } }] });

// Element Operators
//1. $exists -> Matches the documents that have the specified field.
db.collection.find({ age: { $exists: true } });
//2. $type -> Matches the documents that have the specified field type.
db.collection.find({ age: { $type: "int" } });

//B.Update Operators

//Field Update Operators
//1. $set
db.collection.updateOne({ name: "Alice" }, { $set: { age: 30 } });
//2. $unset
db.collection.updateOne({ name: "Alice" }, { $unset: { age: "" } });
//3. $inc -> increments the value of a field by a specified amount.
db.collection.updateOne({ name: "Alice" }, { $inc: { age: 1 } });
//4. $rename -> Renames a field.
db.collection.updateOne({ name: "Alice" }, { $rename: { age: "Years" } });

//Array Update Operators
//1. $push -> Pushes an element to an array
db.collection.updateOne({ name: "Alice" }, { $push: { hobbies: "reading" } });
//2. $pull -> Pushes an element from an array
db.collection.updateOne({ name: "Alice" }, { $pull: { hobbies: "reading" } });
//3. $addToSet -> Adds an element to an array if it does not already exist
db.collection.updateOne(
  { name: "Alice" },
  { $addToSet: { hobbies: "reading" } }
);

//Note -> Now next two I have noted, but really didn't studies

//C. Aggregation Operators
//1. $match -> Filters documents to pass only those that match the specified condition
db.collection.aggregate([{ $match: { age: { $gt: 25 } } }]);
//2. $group -> Groups documents by a specified expression and outputs a document for each group
db.collection.aggregate([{ $group: { _id: "$age", count: { $sum: 1 } } }]);
//3. $proje -> Reshapes each document in the stream by adding, removing, or renaming fields
db.collection.aggregate([{ $project: { name: 1, age: 1 } }]);
//4. $sort -> Sorts documents in the stream by a specified field
db.collection.aggregate([{ $sort: { age: -1 } }]);

//D. Geospatial Operators
//1. $geoWithin: Selects documents with geospatial data within a specified shape.
db.collection.find({
  location: { $geoWithin: { $centerSphere: [[-73.9667, 40.78], 0.01] } },
});
//2. $near: Returns documents sorted by distance from a specified point.
db.collection.find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [-73.9667, 40.78] },
      $maxDistance: 1000,
    },
  },
});
