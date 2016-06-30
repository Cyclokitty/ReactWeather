var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className='text-center'>About</h1>
      <h4 className='text-center'>Welcome to the About Page</h4>
      <p>Hi, I'm Laura and this is the weather app I made in the <a href='https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/overview'> Udemy "The Complete React Web App Developer Course"</a></p>
      <p>This app is made with:
        <ul>
          <li><a href='https://nodejs.org/en/'>Node,</a></li>
          <li><a href='https://facebook.github.io/react/'>React,</a></li>
          <li><a href='http://foundation.zurb.com/'>Foundation,</a></li>
          <li><a href='https://github.com/Cyclokitty/ReactWeather'>kept up to date on Github,</a></li>
          <li><a href='http://quiet-badlands-22529.herokuapp.com/'>and deployed on Heroku.</a></li>
        </ul>
        </p>
      <p>As I learn more, this weather app will be more and more awesome.</p>
    </div>
  )
};

module.exports = About;
