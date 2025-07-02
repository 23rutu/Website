document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let eventSelected = document.getElementById("event").value;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill all fields.");
        return;
    }

    let table = document.getElementById("participantList");
    let newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${eventSelected}</td>
    `;

    // Reset form after submission
    document.getElementById("registrationForm").reset();
});

