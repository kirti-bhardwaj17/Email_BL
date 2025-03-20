function validateEmail(email) {
  let emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
  return emailRegex.test(email);
}

console.log(validateEmail("abc@bridgelabz.co")); // ✅ true (Valid)
console.log(validateEmail("abc.xyz@bridgelabz.co.in")); // ✅ true (Valid)
console.log(validateEmail("abc@bridgelabz.co.uk")); // ✅ true (Valid)
console.log(validateEmail("abc.def@bridgelabz.co")); // ✅ true (Valid)
console.log(validateEmail("xyz@bridgelabz.co.in")); // ❌ false (Must start with "abc")
console.log(validateEmail("abc@xyz.co.in")); // ❌ false (Must contain "bridgelabz")
console.log(validateEmail("abc@bridgelabz.com")); // ❌ false (".co" is mandatory)
console.log(validateEmail("abc@bridgelabz.co.123")); // ❌ false (Invalid domain)
