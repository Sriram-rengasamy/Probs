var n, uniqueDigitis;

function runDepthFirstSearchLeftToRight(value, binaryShift) {
        if (value <= n) 
            ++uniqueDigitis;
		if (value * 10 > n) return;

		for (var digit = 0; digit <= 9; ++digit) {
			if (!binaryShift && digit == 0) 
			     continue; // no 0 for first digit

			var currentDigitExpression = 1 << digit;      

			if (binaryShift & currentDigitExpression) 
			    continue;
			
			var nextBinary = binaryShift | currentDigitExpression;
			runDepthFirstSearchLeftToRight(value * 10 + digit, nextBinary);
		}
}

 function numDupDigitsAtMostN(N) {
  	uniqueDigitis  = 0;
  	n = N;
  	runDepthFirstSearchLeftToRight(0, 0);
  	return N + 1 - uniqueDigitis;
  }

  console.log(numDupDigitsAtMostN(20));