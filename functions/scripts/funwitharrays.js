var add=["abc","def","ghi","mno"];
var input=prompt("def");
	if(add[0]==input)
	{
		y=function()
		{
			alert("You got your name of first place");
		};
	}
	else{
		for(var i=0; i<add.length; i++){
			if(add[i]==input)
			{
			y=function()
			{
				alert("name of the element "+(i+1));
			};
		}
	}
}
function res(res1)
{
	res1();
}
res(y);