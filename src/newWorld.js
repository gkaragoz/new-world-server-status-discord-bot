const fetch = require("node-fetch");
const cheerio = require("cheerio");
// function to get the raw data
const getRawData = (URL) => {
	return fetch(URL)
		.then((response) => response.text())
		.then((data) => {
			return data;
		});
};

// URL for data
const URL = "https://www.newworld.com/en-us/support/server-status";
// start of the program
const scrapeData = async (serverName) => {
	const rawData = await getRawData(URL);
	// parsing the data
	const $ = cheerio.load(rawData);
	// console.log($);
	// write code to extract the data
	const serverList = [];
	let data = "";
	$(".ags-ServerStatus-content-responses-response-server").each((i, el) => {
		const itemParent = $(el);
		const itemTitleStatus = $(el).find("div").html();
		const itemServerName = $(el)
			.find("div")
			.next("div")
			.text()
			.replace(/\s\s+/g, "");

		const titleStart = itemTitleStatus.substring(
			itemTitleStatus.indexOf("title")
		);
		const titleString = titleStart.substring(0, titleStart.indexOf("class="));

		const status = titleString.substring(
			titleString.indexOf('"') + 1,
			titleString.lastIndexOf('"')
		);

		if (serverName.toLowerCase() === itemServerName.toLowerCase()) {
			if (status === "Maintenance") {
				data = serverName + " is under " + status + " ⚒🚬";
			} else {
				data = serverName + " is: " + status + " 🚀";
			}
		}

		serverList.push({
			server_name: itemServerName,
			server_status: status,
		});
	});

	return data;
};

module.exports = scrapeData;
