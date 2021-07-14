function add(a,b){
    return a+b;
}

// now applying currying here

function add(a){
    return function(b){
        return a+b;
    }
}

const add2 = a => b => a+b; // arrow function

//one way of calling
const add1 = add(1);
add1(5) 

//other way 
add(1)(5)

//so in currying instead of seprating our arguments using commas we seperate them using parenthesis