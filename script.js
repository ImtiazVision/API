var request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products');
// The base URL allows us to connect to the API and get a response full of data.We can filter the data by using parameter.
request.open('GET', 'https://hplussport.com/api/products/qty/2/order/name');

// request.onload will trigger the function
request.onload = function() {
  // request.response will prompt the API to response 
  var response = request.response;
  // normally api will return a string, but we are using JSON.parse to convert it to a JavaScript object
  var parsedData = JSON.parse(response);
  console.log(parsedData);
}

// sending the request
request.send();