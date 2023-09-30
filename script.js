document.getElementById("tournament-form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevents form from submitting traditionally
    
    // Fetch form data
    const numTeams = document.getElementById("numTeams").value;
    const startTime = document.getElementById("startTime").value;
    const numPitches = document.getElementById("numPitches").value;
    const format = document.getElementById("format").value;

    // Logic to generate a basic schedule
    // For now, it just outputs the entered data. You'll add more complex logic later.
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <strong>Entered Data:</strong><br>
        Number of Teams: ${numTeams}<br>
        Start Time: ${startTime}<br>
        Number of Pitches: ${numPitches}<br>
        Format: ${format}
    `;
});
