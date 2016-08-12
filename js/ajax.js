function InitAjax()
{
	var ajax=false;
	try
	{
		ajax = new ActiveXObject("Msxml2.XMLHTTP");
	}
	catch (e)
	{
		try
		{
			ajax = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch (E)
		{
			ajax = false;
		}
	}

	if (!ajax && typeof XMLHttpRequest!='undefined')
	{
		ajax = new XMLHttpRequest();
	}
	return ajax;
}

function DoAjaxGet(ajax, url, func_succ)
{
	ajax.open("GET", url, true);
	
	ajax.send(null);
	
	ajax.onreadystatechange = function()
	{
		if (ajax.readyState == 4 && ajax.status == 200)
		{
			func_succ(ajax.responseText);
		}
		else
		{
			//alert("ajax faild readyState:"+ajax.readyState+" status:"+ajax.status);
		}
	}

}

function DoAjaxPost(ajax, url, func_succ, post_datas)
{
	ajax.open("POST", url, true);
	ajax.onreadystatechange = function()
	{
		if (ajax.readyState == 4 && ajax.status == 200)
		{
			func_succ(ajax.responseText);
		}
		else
		{
			alert('ajax faild readyState:'+ajax.readyState+" status:"+ajax.status);
		}
	}
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send(post_datas);
}