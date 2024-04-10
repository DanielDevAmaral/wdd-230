const tableBody = document.getElementById('table-body');
const jsonUrl = '/assets/data/vehicles.json'; 

fetch(jsonUrl) 
  .then(response => response.json())
  .then(data => {
    data.forEach(rental => {
      const tableRow = document.createElement('tr');
      const rentalTypeCell = document.createElement('td');
      rentalTypeCell.textContent = rental['Rental Type'];
      tableRow.appendChild(rentalTypeCell);

      const maxPersonsCell = document.createElement('td');
      maxPersonsCell.textContent = rental['Max. Persons'];
      tableRow.appendChild(maxPersonsCell);

      const reservationCell = document.createElement('td');
      reservationCell.textContent = 'Half Day: ' + rental['Reservation']['Half Day (3 hrs)'] + '\nFull Day: ' + rental['Reservation']['Full Day'];
      tableRow.appendChild(reservationCell);

      const walkInCell = document.createElement('td');
      walkInCell.textContent = 'Half Day: ' + rental['Walk-In']['Half Day (3 hrs)'] + '\nFull Day: ' + rental['Walk-In']['Full Day'];
      tableRow.appendChild(walkInCell);

      tableBody.appendChild(tableRow);
    });
  })
  .catch(error => console.error('Error fetching data:', error));