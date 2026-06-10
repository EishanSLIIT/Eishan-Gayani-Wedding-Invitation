import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please add your MONGODB_URI to .env.local");
}

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  const client = new MongoClient(uri);
  global._mongoClientPromise = client.connect()
    .then((client) => {
      console.log("MongoDB database connected successfully");
      return client;
    })
    .catch((err) => {
      console.error("MongoDB database connection failed:", err);
      throw err;
    });
}

clientPromise = global._mongoClientPromise;

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db("weddingDB");
}