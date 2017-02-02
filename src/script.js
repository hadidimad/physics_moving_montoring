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
var Xoffset=20;
var Yoffset=700;
var scale=25;
function chartDraw()
{
	var type=document.input.type.value;
	var x0=new Number(document.input.X.value);
	var v0=new Number(document.input.speed.value);
	var a=new Number(document.input.acc.value);
	var canvas=document.getElementById('Canvas');
	var ctx=canvas.getContext('2d');
	ctx.lineWidth = 3;
	ctx.font = 'Italic 30px Sans-Serif';
	if(type == "x-t")
	{
		ctx.fillText("X",Xoffset+20,20,100);
		ctx.fillText("t",Xoffset+Yoffset,Yoffset+10,100);
	}else if(type== "v-t")
	{
		ctx.fillText("V",Xoffset+20,20,100);
		ctx.fillText("t",Xoffset+Yoffset,Yoffset+10,100);
	}else if(type=="a-t")
	{
		ctx.fillText("a",Xoffset+20,20,100);
		ctx.fillText("t",Xoffset+Yoffset,Yoffset+10,100);
	}
	for(var i=28;i>=0;i--)
	{
		ctx.fillRect(Xoffset,(i*scale),10,2);
	}
	for(var j=0;j<10;j++)
	{
		ctx.fillRect(Xoffset+(j*scale*3),Yoffset,2,10);
	}
	ctx.moveTo(Xoffset,20);
	ctx.lineTo(Xoffset,Yoffset);
	ctx.moveTo(Xoffset,Yoffset);
	ctx.lineTo(Xoffset+Yoffset,Yoffset);
	var v,x,lv,lx;
	for(var t=1;t<10;t++)
	{
		lv=a*(t-1)+v0
		lx=lv*(t-1)+x0;
		v=a*t+v0;
		x=v*t+x0;
		if(type == "x-t"){
			ctx.moveTo(Xoffset+(t-1)*scale*3,Yoffset-(lx*scale));
			ctx.lineTo(Xoffset+t*scale*3,Yoffset-(x*scale));
		}else if(type=="v-t")
		{
			ctx.moveTo(Xoffset+((t-1)*scale*3),Yoffset-(lv*scale));
			ctx.lineTo(Xoffset+(t*scale*3),Yoffset-(v*scale));
		}else if(type == "a-t")
		{
			ctx.moveTo(Xoffset+((t-1)*scale*3),Yoffset-(a*scale));
			ctx.lineTo(Xoffset+(t*scale*3),Yoffset-(a*scale));
		}
	}
	ctx.stroke();
}
