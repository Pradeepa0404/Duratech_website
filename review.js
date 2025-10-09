let generatedOtp = null;

document.getElementById("sendOtpBtn").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  if (!email || !phone) {
    alert("Please enter Email and Phone before requesting OTP.");
    return;
  }

  // Generate random 6-digit OTP
  generatedOtp = Math.floor(100000 + Math.random() * 900000);

  // Simulate OTP sending (in real life, backend email/SMS service needed)
  alert("Your OTP is: " + generatedOtp + "\n(This is a demo – in real project it will be sent to Email/Phone)");

  // Show OTP input field
  document.getElementById("otpSection").style.display = "block";
  document.getElementById("sendOtpBtn").style.display = "none";
  document.getElementById("submitBtn ").style.display = "inline-block";
});

// Form submission
document.getElementById("reviewForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const enteredOtp = document.getElementById("otp").value;

  if (enteredOtp == generatedOtp) {
    alert("✅ Review submitted successfully!");
    this.reset();

    // Reset form state
    document.getElementById("otpSection").style.display = "none";
    document.getElementById("sendOtpBtn").style.display = "inline-block";
    document.getElementById("submitBtn").style.display = "none";
    generatedOtp = null;
  } else {
    alert("❌ Invalid OTP. Please try again.");
  }
});
