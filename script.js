function isSameType(value1, value2) {
	//NaN = Not a Number "abc" NaN , 123 "123"
	if (isNan(value1) || isNan(value2)) {
	return isNan(value1) && isNan(value2);
	}
	
	return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));