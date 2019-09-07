function compute(op){
	var num1,num2;
	num1=parseFloat(document.getElementById('txtnum1').value);
	num2=parseFloat(document.getElementById('txtnum2').value);
	if(op=="+"){
		document.all.txtResult.value=num1+num2;
	}
	if(op=="-"){
		document.all.txtResult.value=num1-num2;
	}
	if(op=="*"){
		document.all.txtResult.value=num1*num2;
	}
	if(op=="/"){
		document.all.txtResult.value=num1/num2;
	}
}
