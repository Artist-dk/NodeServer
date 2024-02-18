// Your JSON data
const jsonData = {
  name: 'Artist',
  profession: 'Hacker',
};

const url = 'http://localhost:3000/app2';

// Fetch options
const options = {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(jsonData),
};


async function submit() {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.text();
    console.log('Success:', data);
  } catch (error) {
    console.log('Error:', error.message);
  }
}
