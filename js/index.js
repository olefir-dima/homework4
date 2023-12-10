function runPart1() {
  const rate = 40;
  for (let i = 10; i <= 100; i += 10) {
    console.log(i + "$ = " + i * rate + "₴");
  }
  alert("See the result in the console");
}

function runPart2() {
  const numb = ~~prompt(
    "Enter an integer greater than 1 \n(Only the integer part will be used for float numbers)"
  );
  if (!isNaN(numb) && numb < 2) {
    alert("Wrong input! The number must be greater than 1");
    return;
  }

  for (let i = 2; i <= Math.sqrt(numb); i++) {
    if (numb % i === 0) {
      alert(numb + " is not a prime number");
      return;
    }
  }
  alert(numb + " is a prime number");
}

function runPart3() {
  const input = prompt("Enter a number");

  if (!validateInput(input)) {
    return;
  }
  const numb = +input;
  if (numb >= 0) {
    const respObj = isPowerOfThree(numb);
    if (respObj.isPower) {
      alert(`${numb} can be reduced to 3 to ${respObj.power} power`);
    } else {
      alert(`${numb} can not be reduced to 3 to some power`);
    }
  } else {
    alert(
      "Wrong input! \nOnly numbers starting from 0 can be represented as a power of 3"
    );
  }

  function isPowerOfThree(numb) {
    const respObj = {
      isPower: false,
    };

    if (numb === 0) {
      respObj.isPower = true;
      respObj.power = 0;
      return respObj;
    }

    let counter = 0;
    while (numb > 1) {
      counter++;
      if (numb % 3 !== 0) {
        return respObj;
      }
      numb /= 3;
    }
    respObj.isPower = numb === 1;
    respObj.power = counter;
    return respObj;
  }
}

function validateInput(input) {
  if (input === null) {
    alert("As you wish");
  } else if (!input.trim() || isNaN(input)) {
    alert("Invalid number");
  } else {
    return true;
  }
  return false;
}
