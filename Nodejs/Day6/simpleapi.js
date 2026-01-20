const http = require("http");

const people = [
  {
    name: "Rahul Sharma",
    place: "Bengaluru, India",
    favGame: "Cricket",
    favCar: "Lamborghini Aventador",
    gender: "Male",
    age: 28,
    netWorth: "$3.5 million",
  },
  {
    name: "Amit Verma",
    place: "Delhi, India",
    favGame: "Football",
    favCar: "BMW M5",
    gender: "Male",
    age: 32,
    netWorth: "$1.2 million",
  },
  {
    name: "Sneha Patel",
    place: "Ahmedabad, India",
    favGame: "Badminton",
    favCar: "Audi A6",
    gender: "Female",
    age: 26,
    netWorth: "$800k",
  },
  {
    name: "Rohan Mehta",
    place: "Mumbai, India",
    favGame: "Tennis",
    favCar: "Mercedes-Benz C-Class",
    gender: "Male",
    age: 35,
    netWorth: "$5 million",
  },
  {
    name: "Priya Nair",
    place: "Kochi, India",
    favGame: "Chess",
    favCar: "Volvo XC60",
    gender: "Female",
    age: 29,
    netWorth: "$1 million",
  },
  {
    name: "Arjun Singh",
    place: "Jaipur, India",
    favGame: "Kabaddi",
    favCar: "Toyota Fortuner",
    gender: "Male",
    age: 31,
    netWorth: "$900k",
  },
  {
    name: "Neha Kapoor",
    place: "Chandigarh, India",
    favGame: "Basketball",
    favCar: "Mini Cooper",
    gender: "Female",
    age: 27,
    netWorth: "$1.5 million",
  },
  {
    name: "Karan Malhotra",
    place: "Pune, India",
    favGame: "Table Tennis",
    favCar: "Tesla Model 3",
    gender: "Male",
    age: 34,
    netWorth: "$2.8 million",
  },
  {
    name: "Ananya Roy",
    place: "Kolkata, India",
    favGame: "Swimming",
    favCar: "Hyundai Tucson",
    gender: "Female",
    age: 25,
    netWorth: "$600k",
  },
  {
    name: "Vikram Iyer",
    place: "Chennai, India",
    favGame: "Formula 1",
    favCar: "Porsche 911",
    gender: "Male",
    age: 38,
    netWorth: "$7 million",
  },
];

http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(people));
    res.end();
  })
  .listen(4500);
