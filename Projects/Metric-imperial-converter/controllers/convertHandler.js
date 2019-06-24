/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {

  this.chkSlash = function (input) {
    const slashTest = /(^[0-9]+)(\.[0-9]+)?(\/)([0-9]+$)(\.[0-9]+)?/gm
    const chkSlash = slashTest.test(input)  
    return chkSlash
  }

  this.calSlash = function (input) { 
    const calNum = input.split("/")
    const slashNum = calNum[0] / calNum[1]

    return slashNum
  }
  
  this.chkInput = function (input) { 
    const regTest = /(^[0-9]{1,})(\.?)([0 9]{0,})([a-zA-z]{2,3})/gm  
    const chkResult = regTest.test(input)
    return chkResult;
  }
 
  this.getNum = function (input) {
    //find index of last number and 0, index splice/slice it  
 
    const regCharIndex = /[a-zA-z]+/
    const fIndex = input.search(regCharIndex);
    var gNum = input.substring(0, fIndex);
     if (gNum === '') {
      gNum = '1';
    }
    console.log("gNum: " + gNum)
    if (this.chkSlash(gNum)) {     
      gNum = this.calSlash(gNum)
    } 
     return gNum;
  };

  this.getUnit = function (input) {
    //find index of last number and index, length splice/slice it
    const regCharIndex = /[a-zA-z]+/
    const lIndex = input.search(regCharIndex);
    const gUnit = input.substring(lIndex, input.length);
    return gUnit;
  };

  this.chkUnit = function (getUnit, input) {
    const validUnits = ['gal','lbs','mi','L','kg','km'];
    const chkUnit = getUnit(input);

    if (validUnits.includes(chkUnit)) {
      return true;
    } else {
      return false;
    }
  }

  this.chkNum = function (input) {
    if (!isNaN(input)) {
      return true;
    } else {
      return false;
    }
  }

  this.getReturnUnit = function (initUnit) {
    var resultUnit = '';
    switch (initUnit.toLowerCase()) {
      case 'gal':
        resultUnit = 'L';
        break;
      case 'lbs':
        resultUnit = 'kg';
        break;
      case 'mi':
        resultUnit = 'km';
        break;
      case 'l':
        resultUnit = 'gal';
        break;
      case 'kg':
        resultUnit = 'lbs';
        break;
      case 'km':
        resultUnit = 'mi';
        break;
    } 
    return resultUnit;
  };

  this.spellOutUnit = function (unit) {
    var sOutUnit = '';
     switch (unit.toLowerCase()) {
      case 'gal':
        sOutUnit = 'gallon(s)';
        break;
      case 'lbs':
        sOutUnit = 'pound(s)';
        break;
      case 'mi':
        sOutUnit = 'mile(s)';
        break;
      case 'l':
        sOutUnit = 'liter(s)';
        break;
      case 'kg':
        sOutUnit = 'kilogram(s)';
        break;
       case 'km':
        sOutUnit = 'kilometer(s)';
        break;
    }
     return sOutUnit;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var convUnit = 0;


    switch (initUnit) {
      case 'gal':  
        convUnit = galToL;
        break;
      case 'L':
        convUnit = 1/galToL;
        break;
      case 'lbs':
        convUnit = lbsToKg;
        break;
      case 'kg':
        convUnit = 1/lbsToKg;
        break;
      case 'mi':
        convUnit = miToKm;
        break;
      case 'km':
        convUnit = 1/miToKm;
        break;
    }
    return initNum * convUnit;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    const initUnitFull = this.spellOutUnit(initUnit);
    const returnUnitFull = this.spellOutUnit(returnUnit);

    var stringObj = {
      initNum: initNum,
      initUnit: initUnit,
      returnNum: returnNum.toFixed(5),
      returnUnit: returnUnit,
      string: initNum + ' ' + initUnitFull + ' converts to ' + returnNum.toFixed(5) + ' ' + returnUnitFull
    }

     
    return stringObj;
  };

}

module.exports = ConvertHandler;
