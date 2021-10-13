const webhook = require("webhook-discord");

const Hook = new webhook.Webhook(
	"https://discord.com/api/webhooks/897907914486980639/vmpT5fVNmCD-Q60f_a1jGIVFipu-EbZVex-r9VhxP0PdfpisObFGG2SRAUSIRTmXYHUb"
);

const hookTypes = {
	Info: "info",
	Warning: "Warning",
	Error: "Error",
	Success: "Success",
};

module.exports = {
	sendHook,
	hookTypes,
};

function getHookTypeColor(type) {
	if (type === hookTypes.Info) {
		return "#03A9F4";
	} else if (type === hookTypes.Warning) {
		return "#FFC107";
	} else if (type === hookTypes.Error) {
		return "#f44336";
	} else if (type === hookTypes.Success) {
		return "#8BC34A";
	} else {
		return "#212121";
	}
}

function sendHook(title, message, type) {
	if (type === hookTypes.Info) {
		Hook.info(title, message);
	} else if (type === hookTypes.Warning) {
		Hook.warn(title, message);
	} else if (type === hookTypes.Error) {
		Hook.err(title, message);
	} else if (type === hookTypes.Success) {
		Hook.success(title, message);
	}
}
