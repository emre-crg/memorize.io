const host = require("./api/host");

const environment = process.env.HOST || "development"

export default host[environment]