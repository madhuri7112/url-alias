ALIASES = {

	"gm" : "https://www.gmail.com",
	"dg" : "https://github.com/practo/dose-api",
	"gh" : "https://github.com",
	"fb" : "https://www.facebook.com/",
	"cb" : "https://www.online.citibank.co.in/",
	"ww" : "https://web.whatsapp.com/",
        "gs" : "https://docs.google.com/spreadsheets/u/0/",
        "gd" : "https://docs.google.com/document/u/0/?tgif=d"
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

