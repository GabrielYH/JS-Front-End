function CheckIfNumberIsPerfect(num) {
  let divisors = new Array();
  for (let index = 1; index < num; index++) {
    if (num % index === 0) {
      divisors.push(index);
    }
  }
  const sum = divisors.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(sum === num ? "We have a perfect number!" : "It's not so perfect.");
}

CheckIfNumberIsPerfect(6);
