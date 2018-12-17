
const injectSearchByAddress = () => {
	headerTabs = document.querySelector('#tabs');
	console.log('Header Tabs', headerTabs);
}

const initialize = () => {
	injectSearchByAddress();
}
















chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		initialize();
	}
	}, 10);
});