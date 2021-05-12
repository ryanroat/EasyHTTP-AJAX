/* eslint-disable linebreak-style */
const http = new easyHTTP();

// get posts

// http.get('https://jsonplaceholder.typicode.com/posts', (err, posts) => {
//   if (!err) {
//     console.log(posts);
//   } else {
//     console.log(err);
//   }
// });

// create new post

newPost = {
  userId: 1,
  title: 'a new post',
  body: 'this is the body of a new post',
};

http.post('https://jsonplaceholder.typicode.com/posts', newPost, (err, post) => {
  if (!err) {
    console.log(post);
  } else {
    console.log('Error: Something went wrong.');
  }
});
