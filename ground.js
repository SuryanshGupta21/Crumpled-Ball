class ground
{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:false,
            
            }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h, options)
        World.add(world, this.body);

    }
    display()
    {
            
            var groundpos=this.body.position;        
            push()
            translate(groundpos.x, groundpos.y);
            rectMode(CENTER)
            strokeWeight(3);
            fill(255,255,0)
            ellipse(0,0,this.w, this.h);
            pop()
            
    }

}