function abc()
{
var name=[1,2,3,4,5,6,7,8];
if(name[0]<name[1])
{
	return function()
	{
		alert("the large number is"+ name[0]);
	}
}
else if(name[1]>name[2])
{
	return function()
	{
		alert("the larges is"+name[1]);

	}
  }
}
abc()();