const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
  const users = [
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "email": "john.doe@example.com",
      "phone": "+1234567890",
      "address": {
        "street": "123 Elm St",
        "city": "Springfield",
        "state": "IL",
        "zip": "62701"
      },
      "role": "admin"
    },
    {
      "id": 2,
      "first_name": "Jane",
      "last_name": "Smith",
      "email": "jane.smith@example.com",
      "phone": "+1234567891",
      "address": {
        "street": "456 Oak St",
        "city": "Riverside",
        "state": "CA",
        "zip": "92501"
      },
      "role": "user"
    },
    {
      "id": 3,
      "first_name": "Alice",
      "last_name": "Johnson",
      "email": "alice.johnson@example.com",
      "phone": "+1234567892",
      "address": {
        "street": "789 Pine St",
        "city": "Seattle",
        "state": "WA",
        "zip": "98101"
      },
      "role": "user"
    },
    {
      "id": 4,
      "first_name": "Bob",
      "last_name": "Brown",
      "email": "bob.brown@example.com",
      "phone": "+1234567893",
      "address": {
        "street": "101 Maple St",
        "city": "Portland",
        "state": "OR",
        "zip": "97201"
      },
      "role": "user"
    },
    {
      "id": 5,
      "first_name": "Charlie",
      "last_name": "Davis",
      "email": "charlie.davis@example.com",
      "phone": "+1234567894",
      "address": {
        "street": "202 Birch St",
        "city": "Denver",
        "state": "CO",
        "zip": "80201"
      },
      "role": "user"
    },
    {
      "id": 6,
      "first_name": "David",
      "last_name": "Martinez",
      "email": "david.martinez@example.com",
      "phone": "+1234567895",
      "address": {
        "street": "303 Cedar St",
        "city": "Austin",
        "state": "TX",
        "zip": "73301"
      },
      "role": "admin"
    },
    {
      "id": 7,
      "first_name": "Eva",
      "last_name": "Garcia",
      "email": "eva.garcia@example.com",
      "phone": "+1234567896",
      "address": {
        "street": "404 Birchwood Ave",
        "city": "Miami",
        "state": "FL",
        "zip": "33101"
      },
      "role": "user"
    },
    {
      "id": 8,
      "first_name": "Frank",
      "last_name": "Wilson",
      "email": "frank.wilson@example.com",
      "phone": "+1234567897",
      "address": {
        "street": "505 Palm Dr",
        "city": "Los Angeles",
        "state": "CA",
        "zip": "90001"
      },
      "role": "user"
    },
    {
      "id": 9,
      "first_name": "Grace",
      "last_name": "Lee",
      "email": "grace.lee@example.com",
      "phone": "+1234567898",
      "address": {
        "street": "606 Willow Ln",
        "city": "Chicago",
        "state": "IL",
        "zip": "60601"
      },
      "role": "admin"
    },
    {
      "id": 10,
      "first_name": "Hank",
      "last_name": "Taylor",
      "email": "hank.taylor@example.com",
      "phone": "+1234567899",
      "address": {
        "street": "707 Oakwood Dr",
        "city": "San Francisco",
        "state": "CA",
        "zip": "94101"
      },
      "role": "user"
    }
  ];
  
  // Send the users data as JSON response
  res.json(users);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server API started on port ${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is in use. Try a different port.`);
  }
});
