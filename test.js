// test.js
console.log("Running basic checks...");
console.log("1 + 1 =", 1 + 1);

try {
  require('express');
  console.log("✅ Express is available");
  process.exit(0); // success exit code
} catch (err) {
  console.error("❌ Express not found");
  process.exit(1); // failure exit code
}