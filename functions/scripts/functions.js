var one=function()
{
	alert("Hello");
};
var two=function()
{
	alert("Hello There");
};
var three=function()
{
	alert("Hi");
};
function first(para1,para2,para3)
{
	para1();
	para2();
	para3();
}
first(one,two,three);

