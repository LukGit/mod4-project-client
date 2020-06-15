import React from 'react';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className={`ui inverted blue menu`}>
        <div className="left menu">
          <Link to={'/notes'} className="item">
            FlatNote
          </Link>
        </div>
        <div className="right menu">
          <Link to={'/notes'} className="item">
            New Note
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;