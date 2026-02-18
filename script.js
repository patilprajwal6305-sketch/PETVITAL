document.getElementById("petForm").addEventListener("submit", function(e) {

    e.preventDefault();

    let name = document.getElementById("petName").value;
    let type = document.getElementById("petType").value;
    let age = document.getElementById("petAge").value;
    let symptoms = document.getElementById("petSymptoms").value;

    alert(`Pet Added:
    Name: ${name}
    Type: ${type}
    Age: ${age}
    Symptoms: ${symptoms}`);
});
