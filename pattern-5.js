// right-triangle

for(i=1;i<=5;i++){
    var a = ""

    for(j=5;j>=i;j--){
        var b = "   "
        a = a+b
    }
    for(k=1;k<=i;k++){
        var c = " * "
        a = a+c
    }

    console.log(a);
    
}