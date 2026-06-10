import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add your MONGODB_URI to .env.local");
}

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function createClientPromise(): Promise<MongoClient> {
  const client = new MongoClient(uri!);
  return client.connect()
    .then((c) => {
      console.log("MongoDB database connected successfully");
      return c;
    })
    .catch((err) => {
      console.error("MongoDB database connection failed:", err);
      // Clear it so the next connection attempt can retry
      if (process.env.NODE_ENV === "development") {
        global._mongoClientPromise = undefined;
      }
      throw err;
    });
}

export async function getDb(): Promise<Db> {
  let promise: Promise<MongoClient>;
  
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = createClientPromise();
    }
    promise = global._mongoClientPromise;
  } else {
    promise = createClientPromise();
  }
  
  const client = await promise;
  return client.db("weddingDB");
}