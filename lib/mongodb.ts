import { MongoClient, Db } from 'mongodb';
import dns from 'dns';

// Fix Node.js DNS resolution issues (specifically ENOTFOUND on MongoDB SRV records)
dns.setDefaultResultOrder('ipv4first');

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.warn('MONGODB_URI is not set. RSVP saving will fail until configured.');
}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const options = {};
let clientPromise: Promise<MongoClient>;

if (!global._mongoClientPromise) {
  const client = new MongoClient(uri || '', options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export async function getDb(): Promise<Db> {
  const client = await clientPromise;
  return client.db();
}
