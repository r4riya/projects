
/*let a = [];
let arrey=[{ firstname:"riya",lastname:"ahuja"},{firstname:"pradeep",lastname:"tiwari" }];
arrey.map(x => {
  let str =x.firstname[0].toUpperCase()
    let b=x.lastname[0].toUpperCase()
    let res=str.concat(b);
    a.push(res)
});
console.log(a);*/
let a=[];
let arrey=[{firstname:"riya",lastname:"ahuja"},{firstname:"pradeep",lastname:"tiwari"},{firstname:"",lastname:"deewan"}];
        for(let i=0;i<arrey.length;i++){
        
          if(arrey.firstname!==""&&arrey.lastname!==""){
              console.log("string should be present")
          }
          else{
        let str=arrey[i].firstname.charAt(0).toUpperCase();
        let str2=arrey[i].lastname.charAt(0).toUpperCase();
        let res=str.concat(str2);
        a.push(res);
          }


}
console.log(a);