/* eslint-disable linebreak-style */
const http = new easyHTTP();

// get posts

let posts;
// eslint-disable-next-line prefer-arrow-callback
http.get('https://jsonplaceholder.typicode.com/posts', function (err, response) {
  if (!err) {
    posts = response;
    console.log(posts);
  } else {
    console.log(err);
  }
});
