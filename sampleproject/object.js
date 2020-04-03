
class person{
    constructor(scolor,ecolor,weight,height,fname,lname){
        this.scolor=scolor;
        this.ecolor=ecolor;
        this.weight=weight;
        this.height=height;
        this.fname=fname;
        this.lname=lname;

    }

    updateheight(height){
        return "current height:"+height;
    }
    personname(){
        return "person full name is:"+this.fname+this.lname  +  "  nationality is:"+this.nationality;
    }
    updateweight(weight){
        return "current weight is:"+weight;
    }


    }
     person.prototype.nationality="indian";

     


p1=new person("black","blue",67,5,"riya","ahuja");
console.log(p1.updateheight(6));
console.log(p1.updateweight(45));
console.log(p1.personname());
console.log(p1);