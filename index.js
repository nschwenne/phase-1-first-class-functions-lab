
function returnFirstTwoDrivers(drivers) {

      return drivers.slice(0, 2)

}

function returnLastTwoDrivers(drivers) {
return drivers.slice(2, 4)

}

 const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x) {
return function() {
return x * 5
}
}
function fareDoubler(x) {
    return x * 2;
}

function fareTripler(x) {
    return x * 3;
}

function selectDifferentDrivers(drivers, selectingDrivers) { 
  //return returnFirstTwoDrivers(drivers);
  //return returnSecondTwoDrivers(drivers); 
  return selectingDrivers(drivers);
    }



    function sayHiandDoMath(a, b, operator) {

        console.log("hi!")



        return operator(a, b)
    }

    function add(a, b) {
        return a + b
    }

    function multiply(a, b){
        return a * b
    }


    sayHiandDoMath(3, 5, add)

    sayHiandDoMath(3, 5, multiply)

    sayHiandDoMath(3, 5, (a, b) => {
        return a/ b
    })