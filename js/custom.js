function changeColor(strColor)
{
	let bodyElement=document.getElementById("mybody");
	let titleElement=document.getElementById("title");
	bodyElement.style.backgroundColor=strColor;
	if(strColor=="black")
	{
		titleElement.style.color="white";
	}
	else
	{
		titleElement.style.color="black";
	}
}