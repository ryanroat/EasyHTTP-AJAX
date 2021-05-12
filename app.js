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

// newPost = {
//   userId: 1,
//   title: 'a new post',
//   body: 'this is the body of a new post',
// };

// http.post('https://jsonplaceholder.typicode.com/posts', newPost, (err, post) => {
//   if (!err) {
//     console.log(post);
//   } else {
//     console.log('Error: Something went wrong.');
//   }
// });

// update an existing post

// updatePost = {
//   userId: 1234,
//   title: 'updated post',
//   body: 'this replaced the body of the post',
// };

// http.put('https://jsonplaceholder.typicode.com/posts/1', updatePost, (err, post) => {
//   if (!err) {
//     console.log(post);
//   } else {
//     console.log('Error: Something went wrong.');
//   }
// });

// delete an existing post

http.delete('https://jsonplaceholder.typicode.com/posts/1', (err, msg) => {
  if (!err) {
    console.log(msg);
  } else {
    console.log(err);
  }
});
