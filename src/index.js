const app = require('./app.js')
require('dotenv').config();
const { sequelize } = require('./database/models')
async function main() {
    // sequelize.sync not recommended in production, instead use migrations
    await sequelize.sync({force: false});
    app.listen(process.env.PORT);
    console.log(`Server listening on port ${process.env.PORT}`);
};

main();
