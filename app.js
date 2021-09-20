var car = {
  make: 'Honda',
  model: 'Civic',
  year: '2000',
  color: 'red',
  honk: function() { 
    console.log('beep');
    alert('beep beep');
  },
  // adding a driver object to the car object
  driver: { 
    firstName: 'John',
    lastName: 'Doe',
    age: '25',
    license: 'NY'}
    
}

// Using dot notation to access the properties of the object
console.log(car.make);
console.log(car.model);
console.log(car.year);
console.log(car.color);