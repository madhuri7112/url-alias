

ALIASES = {

	"gm" : "https://www.gmail.com",
	"gh" : "https://github.com",
	"fb" : "https://www.facebook.com/",
	"cb" : "https://www.online.citibank.co.in/"
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tabInfo) {
  
  console.log(tabInfo);
  tabUrl = tabInfo.url;
  console.log(tabUrl);

  regexString = /\?q=(.*?)&/g;
  match = regexString.exec(tabUrl)
  
  if (!match) {
  	console.log(tabUrl);
  	console.log("no match found");
  	return;
  }

  searchString = match[1]
  console.log(searchString)
  if (searchString in ALIASES) {
  	 console.log("alias found");
  	 console.log(ALIASES[searchString]);
  	 newUrl = ALIASES[searchString];
  	 chrome.tabs.update(tabId, {url: newUrl});
  } else {
  	console.log("alias not found");
  	return;
  }
  
});
