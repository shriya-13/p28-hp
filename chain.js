class Chain{
    constructor(bodyA,pointB)
    {
        var opt={bodyA:bodyA,pointB:pointB,stiffness:0.05,length:50}
        this.pointB=pointB;
        this.bodyA=bodyA;
    
    this.sling=Constraint.create(opt);
    World.add(world,this.sling);
    
    attach(body){
        this.sling.bodyA=body;
    }
}
display(){
    if(this.sling.bodyA){
    
    var pointA=this.sling.bodyA.position;
    var pointB=this.pointB;
    line (pointA.x, pointA.y, pointB.x, pointB.y)
}
fly(){
    this.sling.bodyA=null;
}
}

}