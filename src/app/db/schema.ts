import { integer, pgTable, varchar, decimal, text, timestamp } from "drizzle-orm/pg-core";
import { pgSchema } from "drizzle-orm/pg-core"

export const productsTable = pgTable("products", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    name: varchar("name", { length: 100 }).notNull(),
    description: text("description"),
    price: decimal("price", { precision: 10, scale: 2 }).notNull(),
    imageURL: varchar("imageURL", { length: 255 }),
    createdAt: timestamp("createdAt").defaultNow(),
    updatedAt: timestamp("updatedAt").defaultNow(),
});