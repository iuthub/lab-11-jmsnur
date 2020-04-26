let leftOperand="0";
let rightOperand="0";
let operator='';
let display=document.querySelector(".calculator__display");

function handleKeyPress(event)
{
	let button=event.target;
	let buttonType=button.getAttribute("data-type");
	if(buttonType=="number")
	{
		if(operator=="")
		{
			if(leftOperand=="0")
			{
				leftOperand=`${button.innerText}`;
			}
			else
			{
				leftOperand+=`${button.innerText}`;
			}
			display.firstChild.nodeValue=leftOperand;
		}
		else
		{
			if(rightOperand=="0")
			{
				rightOperand=`${button.innerText}`;
			}
			else
			{
				rightOperand+=`${button.innerText}`;
			}
			display.firstChild.nodeValue=rightOperand;
			
		}
	}
	else if(buttonType=="operator")
	{
		let buttonAction=button.getAttribute("data-action");
		switch(buttonAction)
		{
			case "add":
			{
				operator="+";
				display.firstChild.nodeValue="0";
				break;
			}
			case "subtract":
			{
				operator="-";
				display.firstChild.nodeValue="0";
				break;
			}
			case "multiply":
			{
				operator="*";
				display.firstChild.nodeValue="0";
				break;
			}
			case "divide":
			{
				operator="/";
				display.firstChild.nodeValue="0";
				break;
			}
			case "decimal":
			{
				if(operator=="")
				{
					leftOperand+=".";
					display.firstChild.nodeValue=leftOperand;
					break;
				}
				else
				{
					rightOperand+=".";
					display.firstChild.nodeValue=rightOperand;
					break;
				}
				break;
			}
			case "clear":
			{
				operator="";
				leftOperand="0";
				rightOperand="0";
				display.firstChild.nodeValue="0";
				break;
			}
			case "calculate":
			{
				switch(operator)
				{
					case "+":
					{
						display.firstChild.nodeValue=Number(leftOperand)+Number(rightOperand);
						break;
					}
					case "-":
					{
						display.firstChild.nodeValue=Number(leftOperand)-Number(rightOperand);
						break;
					}
					case "/":
					{
						display.firstChild.nodeValue=Number(leftOperand)/Number(rightOperand);
						break;
					}
					case "*":
					{
						display.firstChild.nodeValue=Number(leftOperand)*Number(rightOperand);
						break;
					}
					default:{
						break;
					}
				}
				leftOperand=`${display.firstChild.nodeValue}`;
				rightOperand="0";
				operator="";
				break;
			}
			default:{break;}
		}
	}
	else{}
}

let keys=document.querySelector(".calculator__keys");
for(let child of keys.children)
{
	child.addEventListener("click",handleKeyPress);
}