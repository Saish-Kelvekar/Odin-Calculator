const add=(a,b)=>{return Math.round((Number(a)+Number(b))*100)/100;};
const sub=(a,b)=>{return Math.round((Number(a)-Number(b))*100)/100;};
const mul=(a,b)=>{return Math.round((Number(a)*Number(b))*100)/100;};
const div=(a,b)=>{return Math.round((Number(a)/Number(b))*100)/100;};
const power=(a,b)=>{return Math.round((Math.pow(Number(a),Number(b)))*100)/100;};
const mod=(a,b)=>{return Math.round((Number(a)% Number(b))*100)/100; };
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
        case "xy":return power(a,b);
        case "%" :return mod(a,b);
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

            // logic for the backspace
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

            if(type=="decimal"){
                if(!display.textContent.includes(".")){
                    if(firstNumber==""){
                    firstNumber=0;
                    firstNumber+=value;
                    display.textContent=firstNumber.toString();
                    
                }
                else if(firstNumber!="" && operator==""){
                    firstNumber+=value;
                    display.textContent=firstNumber.toString();
                }
                if(secondNumber=="" && operator!=""){
                    secondNumber=0;
                    secondNumber+=value;
                    display.textContent=secondNumber.toString();
                }
                if(secondNumber!=""){
                    secondNumber+=value;
                    display.textContent=secondNumber.toString();  
                }
                }
                else{
                    const btn=document.getElementById("#decimal");
                    btn.disabled=true;
                }
                
            }
        });
        
    });
    
    
   
}

work();