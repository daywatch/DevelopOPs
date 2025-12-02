import { DataSource } from "typeorm";
import { Company } from "../entity/Company";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: parseInt(process.env.DBPORT || "5432"),
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [Company],
  synchronize: true, // dev only
});

export async function initDatabase() {
  await connectDB.initialize();
  console.log("Database connected ✅");
}
