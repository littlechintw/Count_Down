function getRTime(){
    urlinfo=window.location.href;
    len=urlinfo.length;
    offset=urlinfo.indexOf("?");
    newsidinfo=urlinfo.substr(offset,len)
    newsids=newsidinfo.split("=");
	newsid=newsids[1];
	timeset=newsid.replace("%20", " ")
	timeset=newsid.replace("%2F", "/")
	timeset=newsid.replace("%3A", ":")
	var EndTime= new Date(timeset);
	
	document.getElementById("text").innerHTML = '倒數至 ' + String(EndTime);
	var NowTime = new Date();
	var t =EndTime.getTime() - NowTime.getTime();

	var d=Math.floor(t/1000/60/60/24);
	var h=Math.floor(t/1000/60/60%24);
	var m=Math.floor(t/1000/60%60);
	var s=Math.floor(t/1000%60);
	
	var timetext='';
    timetext += String(h) + ' : ';
    if(m<10){
	    timetext += '0' + String(m);
	}
	else{
	    timetext += String(m);
	}
	timetext += ' : ';
	if(s<10){
	    timetext += '0' + String(s);
	}
	else{
	    timetext += String(s);
	}
	
	if(t<0){
	    timetext = 'Time\'s UP!!';
	}
	document.getElementById("time").innerHTML = timetext;
}
setInterval(getRTime,200);
