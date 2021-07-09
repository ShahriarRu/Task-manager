const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const ObjectID = mongodb.ObjectID;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    console.log("Datebase Connected Successfully...");
    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "Shahriar",
    //     age: 22,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Shahriar",
    //       age: 22,
    //     },
    //     {
    //       name: "Shakib",
    //       age: 25,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert");
    //     }
    //     console.log(result.ops);
    //   }
    // );

    //
    // db.collection("users").findOne({ name: "Shakib" }, (error, user) => {
    //   if (error) {
    //     return console.log("Unable to find the user");
    //   }
    //   console.log(user);
    // });

    // db.collection("tasks")
    //   .find({ completed: true })
    //   .toArray((error, tasks) => {
    //     if (error) {
    //       return console.log("Unabale to find task");
    //     }
    //     console.log(tasks);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("60e6bc71d3e7434154a7b0a6"),
    //     },
    //     {
    //       $set: {
    //         name: "Rakib",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("tasks")
      .updateMany(
        {
          completed: false,
        },
        {
          $set: {
            completed: true,
          },
        }
      )
      .then((result) => {
        console.log(result.modifiedCount);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
