function ValidatePassword(input) {
  let errors = new Array();
  if (input.length < 6 || input.length > 10) {
    errors.push("Password must be between 6 and 10 characters");
  }

  if (!input.match(/^[a-zA-Z0-9]+$/)) {
    errors.push("Password must consist only of letters and digits");
  }

  let digitsCount = input.match(/\d/g);
  if (!digitsCount || digitsCount.length < 2) {
    errors.push("Password must have at least 2 digits");
  }

  console.log(errors.length == 0 ? "Password is valid" : errors.join("\n"));
}

ValidatePassword("asdfgh5");
