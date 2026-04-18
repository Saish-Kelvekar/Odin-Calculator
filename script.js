const add=(a,b)=>{return Number(a)+Number(b);};
const sub=(a,b)=>{return Number(a)-Number(b);};
const mul=(a,b)=>{return Number(a)*Number(b);};
const div=(a,b)=>{return Number(a)/Number(b);};

function operate(opr,a,b){
    switch(opr){
        case "+":return add(a,b);
        case "-":return sub(a,b);
        case "×":return mul(a,b);
        case "÷":if(Number(b)==0){
                alert("cannot divide by 0");
                return;
                }
                return div(a,b);
        default:alert("unrecognized operation");
    }
}

function work(){
    let firstNumber="";
    let operator="";
    let secondNumber="";
    const display=document.querySelector('.p');
    const btns=document.querySelectorAll('.calc-button');
    btns.forEach(btn=>{
        btn.addEventListener('click',()=>{
            const type=btn.dataset.type;
            const value=btn.textContent;
            if(type=="number"){
                if(operator===""){
                firstNumber+=value;
                display.textContent=firstNumber}
                else{
                    secondNumber+=value;
                    display.textContent=secondNumber;
                }

            }
            if(type=="operator"){
                if(firstNumber===""){
                    alert("first enter a number");
                }
                operator=value;
                display.textContent=operator;
            }

            if(type=="equals"){
                if(firstNumber!="" && operator!="" && secondNumber!=""){
                    const result=operate(operator,firstNumber,secondNumber);
                    display.textContent=result;
                    firstNumber=result.toString();
                    operator="";
                    secondNumber="";
                }
            }
            if(type=="clear"){
                firstNumber="";
                secondNumber="";
                operator="";
                display.textContent="";
            }
            if(type=="backspace"){
                if(secondNumber!=""){
                    secondNumber=secondNumber.slice(0,-1);
                    display.textContent=secondNumber.toString();
                }

                if(operator!="" && secondNumber==""){
                    operator="";
                    display.textContent="";
                }

                if(firstNumber!="" && operator==""){
                    firstNumber=firstNumber.slice(0,-1);
                    display.textContent=firstNumber.toString();
                }
            }
        });
        
    });
    
    
   
}

work();