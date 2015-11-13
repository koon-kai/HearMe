
import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>@2015 <a href="mailto:koon.kaip@gmail.com">koonkai</a></p>
        <p>Power By Node.js & React</p>
        <p><a href="/admin/signin">Admin</a></p>
      </footer>
    )
  }
}


export default Footer;