

// if this is not a function, then it doesn't work properly
function buttonEvent()
{
	var button = document.getElementById("button");

	function clickA()
	{
		document.getElementById("button").value = "Clicked";
		document.getElementById("text").innerHTML = "A clicked!!!";
	}

	function clickB()
	{
		document.getElementById("button").style.color = "blue";
		document.getElementById("text").innerHTML = "B clicked!!!";
	}

	// for IE event(only IE 9)

	try{
		if(button.attachEvent != null)
		{
			button.attachEvent('onclick', clickA);
			button.attachEvent('onclick', clickB);
		}
		else
		{
			button.addEventListener('click', clickA);
			button.addEventListener('click', clickB);    	
		}
	}
	catch(exception)
	{
		console.log(exception);
	}
}


// Try ~ catch
try{
	window.test();
}
catch(exception)
{
	var out = '';

	for(var i in exception)
	{
		out += i + "  :  " + exception[i] + "\n";
	}
	console.log(out);
	// alert(out);  // only in IE
}


// throw
function validCheck()
{
	var number = document.getElementById("input");

	try
	{
		if(number.value < 0 || isNaN(number.value))
			throw "ErrorCode01"
		else
			console.log(number.value);
	}
	catch(exception)
	{
		if(exception == "ErrorCode01")
		{
			console.log("Out of range!!")
		}
	}
	finally
	{
		number.value = "";
		number.focus();
	}


}

