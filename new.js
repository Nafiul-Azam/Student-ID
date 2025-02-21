document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("student-id-form");
  const idContainer = document.getElementById("student-id-container");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;

    if (name === "" || dob === "" || gender === "") {
      idContainer.innerHTML =
        "<p style='color: red;'>Please fill in all fields.</p>";
      return;
    }

    // Extract first 2 letters of name and last 2 digits of birth year
    const namePart = name.substring(0, 2).toUpperCase();
    const yearPart = dob.substring(2, 4); // Last 2 digits of birth year
    const randomNum = Math.floor(10 + Math.random() * 90); // Generate 2-digit random number

    // Generate Student ID
    const studentID = `${namePart}${yearPart}${randomNum}`;

    // Display the generated Student ID
    idContainer.innerHTML = `<p>Your Student ID: <span>${studentID}</span></p>`;
  });
});
