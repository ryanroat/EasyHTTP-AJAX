/* eslint-disable linebreak-style */
// ES5 Object Oriented with prototypes

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP GET request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url);

  const self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback(`Error: ${self.http.status}`);
    }
  };
  this.http.send();
};

// Make an HTTP POST request
// Make an HTTP PUT request
// Make an HTTP DELETE request
