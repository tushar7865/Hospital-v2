// Get modal element and buttons
let modal = document.getElementById("booking-modal");
let appointmentBtn = document.querySelector(".Appointment-btn");
let closeBtn = document.querySelector(".close-btn");

// Open modal on button click
appointmentBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

// Close modal on close button click
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

// Confirm booking logic
document.getElementById("confirmBtn").addEventListener("click", function() {
    let patientName = document.getElementById("patientName").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let doctorName = document.getElementById("doctorName").value;
    let appointmentDate = document.getElementById("appointmentDate").value;
    let message = document.getElementById("message").value;

    if (patientName && email && dob && doctorName && appointmentDate) {
        alert("Booking Confirmed!\n" +
              `Patient: ${patientName}\n` +
              `Email: ${email}\n` +
              `DOB: ${dob}\n` +
              `Doctor: ${doctorName}\n` +
              `Appointment Date: ${appointmentDate}\n` +
              `Message: ${message}`);
    } else {
        alert("Please fill out all required fields.");
    }
});
