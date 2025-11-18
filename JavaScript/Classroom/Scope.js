var global;//declaration
global= 20;//assignment
var global1=2342;//initialization


// Function scoped variable (var)
function myfunction(){
    var local= 30;//local variable
    console.log(global);
    console.log(global1);
    console.log(local);
}
myfunction();
function myfunction1(){
    let variable="i am function scoped";
    console.log(variable);
}
myfunction1();

// block scoped variable(let& const)
{
    function myfunction2(){
        const value="i am block scoped";
        console.log(value);
    }
    myfunction2();
}

// Lexical scope
function outerfunction(){
    var outervariable="i am from outer function";
    function innerfunction(){
        var innervariable="i am from inner function";
        console.log(outervariable);
        console.log(innervariable);
        
    }
   innerfunction(); 

}
outerfunction();


