var i, j,r=20;
for(i=0;i<r;i++)
{
  for(j=0;j<r;j++){

    if(j+i==r/2||i+j==r-1+(r/2)||j==i+(r/2)||i==j+(r/2)){
    console.log("*  ");
    }
    else {
    console.log(" ");
  }
  console.log("\n");
}
}