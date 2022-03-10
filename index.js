function variaveis() {
    var a;
    var b;
    var c;
    var d;
    var e;
    var f;
    
    a = document.getElementById("valorA").value;
    b = document.getElementById("valorB").value;
    c = document.getElementById("valorC").value;
    
    if(a < b && b < c) {
        a = a;
        b = b;
        c = c;
        document.getElementById("result").innerHTML = "Valor de 'a': " + a + " valor de 'b': " + b + " valor de 'c': " + c;
        console.log("Valor de 'a': " + a + " valor de 'b': " + b + " valor de 'c': " + c);
    } 
    if (b < a && a < c) {
        d = a;
        e = b;
        f = c;
        a = e;
        b = d;
        c = f;
        document.getElementById("result").innerHTML = "Valor de 'a': " + a + " valor de 'b': " + b + " valor de 'c': " + c;
        console.log("Valor de 'a': " + a + " valor de 'b': " + b + " valor de 'c': " + c)
    } 
    if (c < a && a < b) {
        d = a;
        e = b;
        f = c;
        a = f;
        b = d;
        c = e;
        document.getElementById("result").innerHTML = "Valor de 'a': " + a + " valor de 'b': " + b + " valor de 'c': " + c;
        console.log("Valor de 'a': " + a + " valor de 'b': " + b + " valor de 'c': " + c)
    } 
    if (b < c && c < a) {
        d = a;
        e = b;
        f = c;
        a = e;
        b = f;
        c = d;
        document.getElementById("result").innerHTML = "Valor de 'a': " + a + " valor de 'b': " + b + " valor de 'c': " + c;
        console.log("Valor de 'a': " + a + " valor de 'b': " + b + " valor de 'c': " + c)
    } 
    if (c < b && b < a) {
        d = a;
        e = b;
        f = c;
        a = f;
        b = e;
        c = d;
        document.getElementById("result").innerHTML = "Valor de 'a': " + a + " valor de 'b': " + b + " valor de 'c': " + c;
        console.log("Valor de 'a': " + a + " valor de 'b': " + b + " valor de 'c': " + c)
    } 
    if (b < c && c < a) {
        d = a;
        e = b;
        f = c;
        a = e;
        b = f;
        c = d;
        document.getElementById("result").innerHTML = "Valor de 'a': " + a + " valor de 'b': " + b + " valor de 'c': " + c;
        console.log("Valor de 'a': " + a + " valor de 'b': " + b + " valor de 'c': " + c)
    } 
    if (b > a && a > c) {
        d = a;
        e = b;
        f = c;
        a = e;
        b = d;
        c = f;
        document.getElementById("result").innerHTML = "Valor de 'a': " + a + " valor de 'b': " + b + " valor de 'c': " + c;
        console.log("Valor de 'a': " + a + " valor de 'b': " + b + " valor de 'c': " + c)
    }
    if(b > c && c > a) {
        d = a;
        e = b;
        f = c;
        a = d;
        b = f;
        c = e;
        document.getElementById("result").innerHTML = "Valor de 'a': " + a + " valor de 'b': " + b + " valor de 'c': " + c;
        console.log("Valor de 'a': " + a + " valor de 'b': " + b + " valor de 'c': " + c)
    }

}
