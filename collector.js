// Run on window load
function load() {
	document.getElementById("js-enabled").innerText = "true";

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

	post(staticData, "static");
	post(performanceData, "performance");
}


async function post(data, type) {
	const url = `https://kjl135.site/json/${type}`;
	const res = await fetch(url, {
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

window.addEventListener("error", (event) => {
	const error = {
		error: `${event.type}: ${event.message}`,
	};

	post(error, "activity");
});

window.addEventListener("mousemove", (event) => {
	const mouse = {
		mouseCoordinates: `X: ${event.offsetX}, Y: ${event.offsetY}`,
	};

	post(mouse, "activity");
});

window.addEventListener("click", (event) => {
	const click = {
		mouseCoordinates: `X: ${event.offsetX}, Y: ${event.offsetY}`,
		button: event.button,
	};

	post(click, "activty");
});

window.addEventListener("scroll", (event) => {
	const scroll = {
		scrollCoordinates: `X: ${window.scrollX}, Y: ${window.scrollY}`,
	};

	post(scroll, "activity");
});