// require("./newWorld");

require("./src/webhook");

const { sendHook, hookTypes } = require("./src/webhook");
sendHook("SERVER STATUS", `Online! \nPORT:`, hookTypes.Success);
