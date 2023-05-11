// Run on window load
function load() {
	const staticData = {
		userAgent: navigator.userAgent,
		userLanguage: navigator.language,
		cookieEnabled: navigator.cookieEnabled,
		jsEnabled: document.getElementById("js-enabled").innerText == "true",
		imgEnabled: false,
		cssEnabled: document.getElementById("time").style.backgroundColor == "lightgray",
		windowWidth: screen.width,
		windowHeight: screen.height,
		netType: navigator.connection.type
	};

	const performanceData = {
		timing: {},
		loadStart: 0,
		loadEnd: 0,
		totalLoad: 0
	};


	document.getElementById("js-enabled").innerText = "true";

	if ((document.getElementById("flag").offsetWidth == 1 && document.getElementById("flag").readyState == "complete") ||
		(document.getElementById("flag").offsetWidth == 1 && document.getElementById("flag").readyState == undefined)) {
		staticData["imgEnabled"] = true;
	}

	const perfEntries = performance.getEntriesByType("navigation");
	const [p] = perfEntries;
	console.log(p.toJSON());
	performanceData["loadStart"] = p.loadEventStart;
	performanceData["loadEnd"] = p.loadEventEnd;
	performanceData["totalLoad"] = p.loadEventEnd - p.loadEventStart;

	const totalData = {
		static: staticData,
		performance: performanceData,
	};

	post(totalData);
}


const staticURL = "https://kjl135.site/json/posts";

async function post(data) {
	const res = await fetch(staticURL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	}).then(response => {
		console.log(response);
	}).catch(error => {
		console.log(error);
	});
}

window.onload = function () {
	setTimeout(load, 0);
};