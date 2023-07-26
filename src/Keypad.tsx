import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "./MainStyles";

export default function Keypad() {
    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState<Number | null >(null);

    const handleNumberPress = (buttonValue: string) => {
        if (firstNumber.length < 10) {
          setFirstNumber(firstNumber + buttonValue);
        }
    };

    const handleOperationPress = (buttonValue: string) => {
        setOperation(buttonValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
    };

    const clear = () => {
        setFirstNumber("");
        setSecondNumber("");
        setOperation("");
        setResult(null);
    };

    const firstNumberDisplay = () => {
        if (result !== null) {
            return <Text style={result < 99999 ? [Styles.screenFirstNumber, {color: '#46D5B2'}] : [Styles.screenFirstNumber, {fontSize: 50, color:'#46D5B2'}]}>{result?.toString()}</Text>; 
        }
        if (firstNumber && firstNumber.length < 6) {
          return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
        }
        if (firstNumber === "") {
          return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
          return (
            <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
              {firstNumber}
            </Text>
          );
        }
        if (firstNumber.length > 7) {
          return (
            <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
              {firstNumber}
            </Text>
          );
        }
    };

    const getResult = () => {
        switch (operation) {
          case "+":
              clear();
              var result1=parseFloat(secondNumber) + parseFloat(firstNumber);
              setResult(result1);
              setFirstNumber(""+(result1));
              setResult(null);
              break;
          case "-":
              clear();
              var result=parseFloat(secondNumber) - parseFloat(firstNumber);
              setResult(result);
              setFirstNumber(""+(result));
              setResult(null);
              break;
          case "*":
              clear();
              var result=parseFloat(secondNumber) * parseFloat(firstNumber);
              setResult(result);
              setFirstNumber(""+(result));
              setResult(null);
              break;
          case "/":
              clear();
              var result=parseFloat(secondNumber) / parseFloat(firstNumber);
              setResult(result);
              setFirstNumber(""+(result));
              setResult(null);
              break;
        case "%":
              clear();
              var result=((parseFloat(secondNumber)*parseFloat(firstNumber))/100);
              setResult(result);
              setFirstNumber(""+(result));
              setResult(null);
              break;
          }
    };

  const a = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
  const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const c  = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  
    function convert(num) {
      if (num == 0 ) return "zero";
      else return convert_arabs(num);
    }
    function convert_arabs(num){
      if (num>1000000000) {
        return convert_arabs(Math.floor(num/1000000000)) + ' Arab ' + convert_crores(num%1000000000);
      } else {
        return convert_crores(num);
      }
    }
    function convert_crores(num){
      if (num>10000000) {
        return convert_crores(Math.floor(num/10000000)) + ' Crore ' + convert_lakhs (num%10000000);
      } else {
        return convert_lakhs(num);
      }
    } 
    function convert_lakhs(num) {
      if (num >= 100000) {
        return convert_lakhs(Math.floor(num / 100000)) + ' Lakh '  + convert_thousands(num%100000);
      } else {
        return convert_thousands(num);
      }
    }
    function convert_thousands(num) {
      if (num >= 1000) {
        return convert_hundreds(Math.floor(num / 1000)) + ' Thousand ' + convert_hundreds(num % 1000);
      } else {
        return convert_hundreds(num);
      }
    }
    function convert_hundreds(num) {
      if (num > 99) {
        return a[Math.floor(num / 100)] + ' Hundred ' + convert_tens(num % 100);
      } else {
        return convert_tens(num);
      }
    }
    function convert_tens(num) {
      if (num < 10) return a[num];
      else if (num >= 10 && num < 20) return c[num - 10];
      else {
        return b[Math.floor(num / 10)] + " " + a[num % 10];
      }
    }


    return(
        <View style={Styles.viewBottom}>
            
        <View
          style={{
            height: 120,
            width: "90%",
            justifyContent: "flex-end",
            alignSelf: "center",
          }}>
            <Text  style={[Styles.screenWords]}>
              {convert(firstNumber)}
            </Text>
          <Text style={Styles.screenSecondNumber}>
            {secondNumber}
            <Text style={{ color: "purple", fontSize: 50, fontWeight: '500' }}>{operation}</Text>
          </Text>
          {firstNumberDisplay()}
        </View>
        <View style={Styles.row}>
          <Button title="AC" isBlue onPress={clear} />
          <Button title="Del" isBlue onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
          <Button title="%" isBlue onPress={() => handleOperationPress("%")} />
          <Button title="÷" isBlue onPress={() => handleOperationPress("/")} />
        </View>
        <View style={Styles.row}>
          <Button title="7" onPress={() => handleNumberPress("7")} />
          <Button title="8" onPress={() => handleNumberPress("8")} />
          <Button title="9" onPress={() => handleNumberPress("9")} />
          <Button title="x" isBlue onPress={() => handleOperationPress("*")} />
        </View>
        <View style={Styles.row}>
          <Button title="4" onPress={() => handleNumberPress("4")} />
          <Button title="5" onPress={() => handleNumberPress("5")} />
          <Button title="6" onPress={() => handleNumberPress("6")} />
          <Button title="-" isBlue onPress={() => handleOperationPress("-")} />
        </View>
        <View style={Styles.row}>
          <Button title="1" onPress={() => handleNumberPress("1")} />
          <Button title="2" onPress={() => handleNumberPress("2")} />
          <Button title="3" onPress={() => handleNumberPress("3")} />
          <Button title="+" isBlue onPress={() => handleOperationPress("+")} />
        </View>
        <View style={Styles.row}>
          <Button title="0" onPress={() => handleNumberPress("0")} />
          <Button title="00" onPress={() => handleNumberPress("00")} />
          <Button title="000" onPress={() => handleNumberPress("000")} />
          <Button title="=" isBlue onPress={() => getResult()} />
        </View>
      </View>
    );
}