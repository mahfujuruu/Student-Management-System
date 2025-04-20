// script.js
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const grade = document.getElementById('grade').value;

    const table = document.getElementById('studentTable').querySelector('tbody');
    const row = table.insertRow();
    row.innerHTML = `
        <td>${name}</td>
        <td>${id}</td>
        <td>${grade}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
    `;
    
    document.getElementById('studentForm').reset();
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
