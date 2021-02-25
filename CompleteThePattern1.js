function pattern(n){
    var output="";
      // Happy Coding ^_^
      for(var i=0;i<n;i++){
        for(var k=0;k<i+1;k++){
            output += (i+1);
            }
            if(i!=n-1) output += "\n";
     
     }
    return output;
   }
module.exports = pattern;