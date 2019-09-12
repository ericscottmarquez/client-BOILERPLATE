import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';
import { Button, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';



class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      return (
        <div>
        <Button animated='fade' as={Link} to="/signout" >
          <Button.Content visible>Sign Out</Button.Content>
          <Button.Content hidden>Bye!</Button.Content>
        </Button>

        <Button animated='fade' as={Link} to="/feature" >
          <Button.Content visible>Dashboard</Button.Content>
          <Button.Content hidden>Let's Go</Button.Content>
        </Button>
        </div>

      );
    } else {
        return (
          <div>
            <Button animated='fade' as={Link} to="/signup" >
              <Button.Content visible>Sign-up for a Pro account!</Button.Content>
              <Button.Content hidden>$32.99 a month</Button.Content>
            </Button>

            <Button animated='fade' as={Link} to="/signin" >
              <Button.Content visible>Sign-In</Button.Content>
              <Button.Content hidden>Welcome</Button.Content>
            </Button>
          </div>
      );
    }
  }

  render() {
    return (
      <div className="header">

        <Button animated='fade' as={Link} to="/" >
          <Button.Content visible>Home</Button.Content>
          <Button.Content hidden>Home</Button.Content>
        </Button>

        {this.renderLinks()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
