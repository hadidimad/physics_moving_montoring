var lines=0;
function draw()
{
	lines++;
	var c=document.getElementById('newCanvas');
	var ctx=c.getContext('2d');
	ctx.font="10px tohama";
	ctx.fillStyle='#FF0000';
	for(var i=0;i<=100;i++)
	{
		ctx.fillRect(10+i*13,lines*100-20,3,3);
		
	}
	var x0=new Number(document.input.X.value);
	var v0=new Number(document.input.speed.value);
	var a=new Number(document.input.acc.value);
	if(x == "")
	{
		x=0;
	}
	if(v == "")
	{
		v=0;
	}
	if(a == "")
	{
		a=0;
	}
	var v,x;
	ctx.fillStyle='#0000FF';
	for(var time=0;time<=10;time++)	
	{
		v=a*time+v0;
		x=v*time+x0;
		ctx.fillRect(10+x*13,lines*100,8,65);
		alert("X is"+x+"V is"+v);
	}
}
