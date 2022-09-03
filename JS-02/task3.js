function calculator(a, operator, b) {
	process.stdout.write(a + " " + operator + " " + b + " = ");
	
	let result = "";
	try {
		if (isNaN(a) || isNaN(b)) {
			throw "Недопустиме чилсо";

		} else if (operator != "+" && operator != "-" && operator != "*" && operator != "/") {
			throw "Недопустимий оператор";
		
		} else {
			switch (operator) {
				case ("+"): {
					result = a + b;
					break;
				}
				case ("-"): {
					result = a - b;
					break;
				}
				case ("*"): {
					result = a * b;
					break;
				}
				case ("/"): {
					if (b == 0) {
						throw "Error";
					} else {
						result = a / b;
						break;
					}
				}
			}
		}
	} catch (error) {
		process.stdout.write(error);
	}

	return result;
}

let a = 5;
let b = 2.5;

console.log("Перевірка калькулятора:")
console.log(calculator(a, "+", b));
console.log(calculator(a, "-", b));
console.log(calculator(a, "*", b));
console.log(calculator(a, "/", b));
console.log();
console.log("Перевірка калькулятора + помилки:")
console.log(calculator("a", "+", b));
console.log(calculator(a, "+", "b"));
console.log(calculator(a, "add", b));
console.log(calculator(a, "/", 0));