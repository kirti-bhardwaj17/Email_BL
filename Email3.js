function validateEmail(email) {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@bridgelabz\.co\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

// Test Cases
console.log(validateEmail("abc@bridgelabz.co.in")); // ✅ true (Valid)
console.log(validateEmail("xyz@bridgelabz.co.uk")); // ✅ true (Valid)
console.log(validateEmail("user123@bridgelabz.co.us")); // ✅ true (Valid)
console.log(validateEmail("abc.xyz@bridgelabz.co")); // ❌ false (Missing domain extension)
console.log(validateEmail("abc@bridgelabz.com")); // ❌ false (Must contain "co.")
console.log(validateEmail("abc@bridgelabzco.in")); // ❌ false (Missing ".co.")
console.log(validateEmail("abc@xyz.co.in")); // ❌ false (Missing "bridgelabz")
console.log(validateEmail("abc@bridgelabz.co.123")); // ❌ false (Invalid domain)
