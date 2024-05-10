// Input validation functions
function isValidEmail(email: string) {
  const emailRegex =
    /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})$/;
  return emailRegex.test(email);
}

function isValidPassword(password: string) {
  // Check if password length is at least 8 characters
  if (password.length < 8) {
    return false;
  }

  // Check if password contains at least one letter
  if (!/[a-zA-Z]/.test(password)) {
    return false;
  }

  // Check if password contains at least one symbol (non-alphanumeric character)
  if (!/[\W_]/.test(password)) {
    return false;
  }

  // All validation passed
  return true;
}

export default function isInputIsValid(type: string, value: string) {
  if (type === "password") {
    return isValidPassword(value);
  } else if (type === "email") {
    return isValidEmail(value);
  } else {
    throw new Error("Wrong type especify");
  }
}
