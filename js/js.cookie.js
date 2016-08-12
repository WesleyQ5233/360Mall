function setCookie(name, value, expiresdays){
	var exp = new Date();
	exp.setDate(exp.getDate() + expiresdays);
	
	document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" +exp.toGMTString(); 
}

function getCookie(name){
	var myCookie = document.cookie;
	
	var data = myCookie.split("; ");
	
	for(var i = 0; i < data.length; i++){
		var co = data[i].split("=");
		if (co[0] == name) {
			return decodeURIComponent(co[1]);
		}
	}
	
	return "";
}

function getCookie2(name){
	var myCookie = document.cookie;
	
	var data = myCookie.split("; ");
	
	var cookies = {};
	for(var i = 0; i < data.length; i++){
		var co = data[i].split("=");
		cookies[co[0]] = co[1];
	}
	
	if(name in cookies){
		return cookies[name];
	} else {
		return "";
	}
	
}

function getCookie3(name){
	var myCookie = document.cookie;
	
	var exists = myCookie.indexOf(name);
	if(exists != -1){
		var start = exists + name.length + 1;
		var end = myCookie.indexOf(";", start);
		if(end != -1){
			return myCookie.substring(start, end);
		} else {
			return myCookie.substring(start);
		}
		
	}
	return "";
}

function delCookie(name){
	var exp = new Date();
	exp.setDate(exp.getDate() - 1);
	
	document.cookie = name + "=xx;expires=" + exp.toGMTString(); 
}