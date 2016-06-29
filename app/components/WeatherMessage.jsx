var React = require('react');

// var WeatherMessage = React.createClass({
//     render: function() {
//       var {temp, location} = this.props;
//       return (
//       <div>
//         <h2>Hi! It is {temp}&deg;C in {location} right now!</h2>
//       </div>
//     );
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return (
  <div>
    <h2>Hi! It is {temp}&deg;C in {location} right now!</h2>
  </div>
)
};

module.exports = WeatherMessage;
