function displayNumbers() {
    // Retrieve the data from the JSON file
    fetch(`https://raw.githubusercontent.com/mustafa-khaled/Expenses-chart-component/main/data.json`)
        .then(response => response.json())
        .then(data => {
            // Loop through the data and update the HTML
            data.forEach(item => {
                const dayElem = document.querySelector(`div[data="${item.day}"]`);
                if (dayElem) {
                    const numElem = dayElem.querySelector('.num');
                    numElem.innerHTML = item.amount;
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Call the function to display the numbers on page load
displayNumbers();
