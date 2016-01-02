var linkList = {
	Google:"http://goolle.com",
	Micosoft:"http://micosoft.com",
	Apple:"http://apple.com"
	};

var runLinks = function  () {
	
	var list= document.querySelectorAll('.nav');
	var output = '<ul>';
	for (var ke in arguments[0]) {
		output+= '<li><a href="'+linkList[ke]+'">'+ke+'</a></li>';
		
	};
	output+='</ul>';
	for (var i = list.length - 1; i >= 0; i--) {
		list[i].innerHTML=output;
	};

}(linkList);