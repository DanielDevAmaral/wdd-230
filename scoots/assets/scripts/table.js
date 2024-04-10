const tableBody = document.getElementById('table-body');
const jsonUrl = 'https://danieldevamaral.github.io/wdd230/scoots/assets/data/vehicles.json'; 

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
        
        // Create separate cells for Half Day and Full Day under Reservation
        const reservationHalfDayCell = document.createElement('td');
        reservationHalfDayCell.textContent = rental['Reservation']['Half Day']; // Access using the correct key
        tableRow.appendChild(reservationHalfDayCell);
        
        const reservationFullDayCell = document.createElement('td');
        reservationFullDayCell.textContent = rental['Reservation']['Full Day'];
        tableRow.appendChild(reservationFullDayCell);
        
        // Create separate cells for Half Day and Full Day under Walk-In
        const walkInHalfDayCell = document.createElement('td');
        walkInHalfDayCell.textContent = rental['Walk-In']['Half Day'];
        tableRow.appendChild(walkInHalfDayCell);
        
        const walkInFullDayCell = document.createElement('td');
        walkInFullDayCell.textContent = rental['Walk-In']['Full Day'];
        tableRow.appendChild(walkInFullDayCell);
        
        tableBody.appendChild(tableRow);
    });
  })
  .catch(error => console.error('Error fetching data:', error));