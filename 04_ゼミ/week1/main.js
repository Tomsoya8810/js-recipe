const fizzbuzz = function (number) {
  for (let x = 1; x <= number; x += 1) {
    if (x % 15 == 0) {
      console.log("FizzBuzz")
    } else if (x % 3 == 0) {
      console.log("Fizz")
    } else if (x % 5 == 0) {
      console.log("Buzz")
    } else {
      console.log(x)
    }
  }
}
