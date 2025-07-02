const subEventData = {
    hackathon: ["AI Challenge", "Cyber Security Round", "Data Science Battle"],
    coding: ["Speed Coding", "Debugging Contest", "Code Golf"],
    logic: ["Puzzle Quest", "Algorithm Race", "Brain Teasers"],
    escape: ["Hack the Code", "Decrypt the Message", "Bug Fixing Marathon"]
};

document.getElementById("eventSelect").addEventListener("change", function() {
    let selectedEvent = this.value;

    // Redirect based on selected event
    switch (selectedEvent) {
        case "hackathon":
            window.location.href = "1sportreg form.html";
            break;
        case "coding":
            window.location.href = "2sportreg form.html";
            break;
        case "logic":
            window.location.href = "3sportreg form.html";
            break;
        case "escape":
            window.location.href = "4sportreg form.html";
            break;
        default:
            // Do nothing if no valid event is selected
            break;
    }
});
