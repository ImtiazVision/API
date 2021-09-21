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

// Accessing the driver object within the car object. We can just use the dot notation to access the properties of the driver object.Just add an extra dot to access nested objects.

console.log(car.driver.firstName);
console.log(car.driver.lastName);
console.log(car.driver.age);
console.log(car.driver.license);

