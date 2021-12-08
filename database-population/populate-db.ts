import { findAllBusinessUnits, findAllClients, findAllSkills, findClientsForBu } from "./db-data";

console.log("Populating the MongoDB database with some sample data ...");

const MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

const MONGODB_CONNECTION_URL = 'mongodb://localhost:27017';

// Database Name
const dbName = 'nexton-db';

const mongoClient = new MongoClient(MONGODB_CONNECTION_URL);

// Use connect method to connect to the Server
mongoClient.connect(async (err, client) => {

  try {

    if (err) {
      console.log("Error connecting to database, please check the username and password, exiting.");
      process.exit();
    }

    console.log("Connected correctly to server");

    const db = client.db(dbName);

    const businessUnits = findAllBusinessUnits();

    for (let i = 0; i < businessUnits.length; i++) {

      const bu:any = businessUnits[i];

      const newBu: any = {...bu};
      delete newBu.id;

      console.log("Inserting course ",  newBu);

      const result = await db.collection('units').insertOne(newBu);

      const businessUnitId = result.insertedId;

      console.log("new businessUnit id", businessUnitId);

      const clients = findClientsForBu(bu.id);

      for (let j = 0; j< clients.length; j++) {

        const client = clients[j];

        const newClient:any = {...client};
        delete newClient.id;
        delete newClient.businessUnitId;
        newClient.businessUnit = new ObjectId(businessUnitId);

        console.log("Inserting client", newClient);

        await db.collection("clients").insertOne(newClient);

      }

    }

    const skills = findAllSkills();

    for (let i = 0; i < skills.length; i++) {
      const skill:any = skills[i];
      const newSkill: any = {...skill};
      delete newSkill.id;
      console.log("Inserting skill ",  newSkill);
      const result = await db.collection('skills').insertOne(newSkill);
    }

    // console.log('Finished uploading data, creating indexes.');
    // await db.collection('clients').createIndex( { "url": 1 }, { unique: true } );
    // console.log("Finished creating indexes, exiting.");
    client.close();
    process.exit();

  }
  catch (error) {
    console.log("Error caught, exiting: ", error);
    client.close();
    process.exit();
  }

});

process.stdin.resume();
