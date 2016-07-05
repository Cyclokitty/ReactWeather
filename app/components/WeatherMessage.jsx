var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
  <div>
    <h2 className='text-center'>Hi! It is {temp}&deg;C in {location} right now!</h2>
  </div>
)
};

module.exports = WeatherMessage;
