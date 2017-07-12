var x=prompt("Enter your age");
	x=parseInt(x);
var y;
	if (x%2==0)
	{
		y=function(){
		alert("even number");
		}
	}
	else
	{
		y=function(){
		alert("odd number");
		}
	}
function first(para)
{
	para();
}
first(y);