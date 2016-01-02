

( function  () {
	var linkList = {
	Google:"http://goolle.com",
	Micosoft:"http://micosoft.com",
	Apple:"http://apple.com"
	};
	var list= document.querySelectorAll('.nav');
	var output = '<ul>';
	for (var ke in linkList) {
		output+= '<li><a href="'+linkList[ke]+'">'+ke+'</a></li>';
		
	};
	output+='</ul>';
	for (var i = list.length - 1; i >= 0; i--) {
		list[i].innerHTML=output;
	};

})();