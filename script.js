var request = new XMLHttpRequest();

request.open('GET', 'https://hplussport.com/api/products');

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