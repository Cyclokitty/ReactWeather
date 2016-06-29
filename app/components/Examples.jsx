var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className='text-center'>Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to='/?location=Toronto'>Toronto, Canada</Link>
        </li>
        <li>
          <Link to='/?location=Belo+Horizonte'>Belo Horizonte, Brazil</Link>
        </li>
        <li>
          <Link to='/?location=London,uk'>London, UK</Link>
        </li>
        <li>
          <Link to='/?location=Sydney,au'>Sydney, Australia</Link>
        </li>
        <li>
          <Link to='/?location=Phuket'>Phuket, Thailand</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
