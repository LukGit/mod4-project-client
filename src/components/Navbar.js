import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


class Navbar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  handleLogout = event => {
    this.props.logoutUser()
  }

  render() {
    return (
      <Menu inverted size='mini'>
        <Menu.Item>
          <Link to={'/notes'} className="item">
            FlatNote
          </Link>
        </Menu.Item>
        <Menu.Item >
          <Link to={'/notes/new'} className="item">
            New Note
          </Link>
        </Menu.Item>
        <Menu.Item position='right'>
          <Link onClick={this.handleLogout}to={'/login'} className="item">
            Sign Out
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {}
}
// export default connect(mapStateToProps, { logoutUser } )(Navbar);
export default connect(mapStateToProps, { logoutUser } )(withRouter(Navbar))