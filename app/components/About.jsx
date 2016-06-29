var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
  return (
    <div>
      <h1 className='text-center'>About</h1>
      <h4 className='text-center'>Welcome to the About Page</h4>
      <p>Hi, I'm Laura and this is the weather app I made in the <Link to='https://www.udemy.com/the-complete-react-web-app-developer-course/learn/v4/overview'> Udemy "The Complete React Web App Developer Course"</Link>.</p>
      <p>This app is made with:
        <ul>
          <li><Link to='https://nodejs.org/en/'>Node,</Link></li>
          <li><Link to='https://facebook.github.io/react/'>React,</Link></li>
          <li><Link to='http://foundation.zurb.com/'>Foundation,</Link></li>
          <li><Link to='https://github.com/Cyclokitty/ReactWeather'>kept up to date on Github,</Link></li>
          <li><Link to='http://quiet-badlands-22529.herokuapp.com/'>and deployed on Heroku.</Link></li>
        </ul>
        </p>
      <p>As I learn more, this weather app will be more and more awesome.</p>
    </div>
  )
};

module.exports = About;
