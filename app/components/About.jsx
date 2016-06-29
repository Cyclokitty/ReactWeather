var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });

var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <h4>Welcome to the About Page</h4>
      <p>Hi, I'm Laura and this is the weather app I made in the Udemy "The Complete React Web App Developer Course".</p>
      <p>This app is made with Node, React, and kept up to date on Github, and deployed on Heroku.</p>
      <p>As I learn more, this weather app will be more and more awesome.</p>
    </div>
  )
};

module.exports = About;
