import { integer, pgTable, varchar, decimal, text, timestamp } from "drizzle-orm/pg-core";
//import { pgSchema } from "drizzle-orm/pg-core"

export const productsTable = pgTable("products", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    name: varchar("name", { length: 100 }).notNull(),
    description: text("description"),
    price: decimal("price", { precision: 10, scale: 2 }).notNull(),
    image_url: varchar("image_url", { length: 255 }),
    created_at: timestamp("created_at").defaultNow(),
    updated_at: timestamp("updated_at").defaultNow(),
});

export const recipesTable = pgTable("recipes", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    title: varchar("title").notNull(),
    description: varchar("description").notNull(),
    product_id: integer("product_id"),
    updated_at: timestamp("updated_at").defaultNow(),
    created_at: timestamp("created_at").defaultNow(),
    body: varchar("body").notNull()
});

//models

export interface RecipesModel {
    id: number,
    title: string,
    body: string,
    product_id: number | null,
    created_at: Date | null,
    updated_at: Date | null,
    description: string
}