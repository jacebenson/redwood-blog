# Migration `20201204185158-added-source-and-item`

This migration has been generated by Jace Benson at 12/4/2020, 12:51:58 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Source" (
"id" SERIAL,
    "author" TEXT NOT NULL DEFAULT E'',
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastRun" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "sourceType" TEXT NOT NULL DEFAULT E'RSS',

    PRIMARY KEY ("id")
)

CREATE TABLE "Item" (
"id" SERIAL,
    "author" TEXT NOT NULL DEFAULT E'',
    "url" TEXT NOT NULL,

    PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201204102037-migration..20201204185158-added-source-and-item
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -26,4 +26,18 @@
   completed DateTime?
   due       DateTime?
   details   String? // will store as json i guess?
 }
+
+model Source {
+  id         Int       @id @default(autoincrement())
+  author     String    @default("")
+  created    DateTime  @default(now())
+  lastRun    DateTime? @default(now())
+  sourceType String    @default("RSS")
+}
+
+model Item {
+  id     Int    @id @default(autoincrement())
+  author String @default("")
+  url    String
+}
```


