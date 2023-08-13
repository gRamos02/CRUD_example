import { PORT } from "./config.js";
import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
    await sequelize.sync({force: false});
    app.listen(PORT);
    console.log(`Server listening on port ${PORT}`);
};

main();
