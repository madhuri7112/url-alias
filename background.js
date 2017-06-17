ALIASES = {

	"gm" : "https://www.gmail.com",
	"dg" : "https://github.com/practo/dose-api",
	"gh" : "https://github.com",
	"fb" : "https://www.facebook.com/",
	"dgp" : "https://github.com/practo/dose-api/pulls",
	"rg" : "https://github.com/practo/Pharma-Remedy-UI",
	"c" : "https://practo.atlassian.net/wiki/display/PharmaWAR/Sprints",
	"j" : "https://practo.atlassian.net/secure/RapidBoard.jspa?rapidView=318&quickFilter=1234",
	"cb" : "https://www.online.citibank.co.in/"
}

var redirectOnAlias = function(tabId, changeInfo, tabInfo) { 
  tabUrl = tabInfo.url;

  /*To extract the string which is entered/searched*/
  regexString = /\?q=(.*?)&/g;
  match = regexString.exec(tabUrl)
  
  if (!match) {
  	
  	return;
  }

  searchString = match[1]
  
  if (searchString in ALIASES) {  	 
  	 redirectUrl = ALIASES[searchString];
  	 chrome.tabs.update(tabId, {url: redirectUrl});
  } else {

  	return;
  }  
}

chrome.tabs.onUpdated.addListener(redirectOnAlias);

