function validateEmail(email) {
  let emailRegex = /^[a-zA-Z0-9][a-zA-Z0-9._+-]*@bridgelabz\.co\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Test Cases
console.log(validateEmail("abc.xyz@bridgelabz.co.in")); // ✅ true (Valid)
console.log(validateEmail("abc@bridgelabz.co.uk")); // ✅ true (Valid)
console.log(validateEmail("abc_123@bridgelabz.co.us")); // ✅ true (Valid)
console.log(validateEmail("abc+xyz@bridgelabz.co.in")); // ✅ true (Valid)
console.log(validateEmail("abc-xyz@bridgelabz.co.in")); // ✅ true (Valid)
console.log(validateEmail("abc.xyz.123@bridgelabz.co.in")); // ✅ true (Valid)

console.log(validateEmail(".abc@bridgelabz.co.in")); // ❌ false (Cannot start with a dot)
console.log(validateEmail("_abc@bridgelabz.co.in")); // ❌ false (Cannot start with _)
console.log(validateEmail("+abc@bridgelabz.co.in")); // ❌ false (Cannot start with +)
console.log(validateEmail("xyz@bridgelabz.co.in")); // ✅ true (Valid, xyz is fine)
console.log(validateEmail("abc@bridgelabz.com")); // ❌ false (Must contain "co.")
console.log(validateEmail("abc@xyz.co.in")); // ❌ false (Missing "bridgelabz")
console.log(validateEmail("abc@bridgelabz.co.123")); // ❌ false (Invalid domain)
