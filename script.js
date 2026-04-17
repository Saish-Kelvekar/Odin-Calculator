const add=(a,b)=>{return a+b;};
const sub=(a,b)=>{return a-b};
const mul=(a,b)=>{return a*b};
const div=(a,b)=>{return a/b};

function operate(opr,a,b){
    switch(opr){
        case "+":return add(a,b);
        case "-":return sub(a,b);
        case "*":return mul(a,b);
        case "/":if(b==0){
                alert("cannot divide by 0");
                }
                return div(a,b);
        default:alert("unrecognized operation")
    }
}