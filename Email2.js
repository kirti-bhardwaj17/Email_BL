function validateEmail(email) {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@bridgelabz\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Test Cases
console.log(validateEmail("abc@bridgelabz.co")); // ✅ true (Valid)
console.log(validateEmail("xyz@bridgelabz.in")); // ✅ true (Valid)
console.log(validateEmail("user123@bridgelabz.com")); // ✅ true (Valid)
console.log(validateEmail("abc.xyz@bridgelabz.co.in")); // ✅ true (Valid)
console.log(validateEmail("abc@xyz.co.in")); // ❌ false (Missing "bridgelabz")
console.log(validateEmail("abc@bridgelabz")); // ❌ false (Missing domain extension)
console.log(validateEmail("abc.xyz@bridgelabz.123")); // ❌ false (Invalid domain)
console.log(validateEmail("abcbridgelabz.co")); // ❌ false (Missing "@")
