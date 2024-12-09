import { app } from "./application/server.js";
import { deleteUnverifiedUsers } from "./utilities/auto-delete-users/auto-delete.js";
import cron from "node-cron";

cron.schedule("*/10 * * * *", async () => {
  console.log("Running...");
  await deleteUnverifiedUsers();
});

app.listen( process.env.PORT || 8080, () => {
  console.log("Server started on port 8080");
});
