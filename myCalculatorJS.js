

		var currentValue
		var actionButton
		

		function numberButtonAction(button){
			if (calculatorScreen.value == "0"){
				calculatorScreen.value = button.value;
			}

			else if (equal = "fulfilled"){
				calculatorScreen.value = button.value
			}

			else {
				 calculatorScreen.value = calculatorScreen.value + button.value;
			}	
		}

		function plusButtonDoes(button){
			currentValue = calculatorScreen.value;
			calculatorScreen.value = "";
			actionButton = button.value
		}	


		function multiplyButtonDoes(button){
			currentValue = calculatorScreen.value;
			calculatorScreen.value = "";
			actionButton = button.value	
		}


		function divideButtonDoes(button){
			currentValue = calculatorScreen.value;
			calculatorScreen.value = "";
			actionButton = button.value	
		}


		function minusButtonDoes(button){
			currentValue = calculatorScreen.value;
			calculatorScreen.value = "";
			actionButton = button.value	
		}

		function powerofButtonDoes(button){
			currentValue = calculatorScreen.value;
			calculatorScreen.value = "";
			actionButton = button.value	
		}

		function equalButtonDoes(button){


			switch (actionButton){
				case "+": 
						calculatorScreen.value = parseInt(currentValue) + parseInt(calculatorScreen.value);
				break;
				case "X":
						calculatorScreen.value = parseInt(currentValue) * parseInt(calculatorScreen.value);
				break;
				case "/":
						calculatorScreen.value = parseInt(currentValue) / parseInt(calculatorScreen.value);
				break;		
				case "-":
						calculatorScreen.value = parseInt(currentValue) - parseInt(calculatorScreen.value);		
				break;
				case "^":
						calculatorScreen.value = Math.pow(parseInt(currentValue), parseInt(calculatorScreen.value));
				break;				


			}
			var equal = fulfilled
		}

		function clearCalculatorScreen(){
			calculatorScreen.value = "0"
		}
