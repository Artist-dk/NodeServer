// Your JSON data
const jsonData = {
  key1: 'value1',
  key2: 'value2',
  // Add more key-value pairs as needed
};

// URL to send the JSON data to
const url = 'http://localhost:3000/app2';

// Fetch options
const options = {
  method: 'POST', // or 'PUT', 'DELETE', etc. depending on your API
  headers: {
    'Content-Type': 'application/json',
    // Add any additional headers if required
  },
  body: JSON.stringify(jsonData),
};

// Make the Fetch API call
fetch(url, options)
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.log('Error:', error);
  });
