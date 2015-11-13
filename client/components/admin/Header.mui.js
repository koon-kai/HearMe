import React, { Component } from 'react';
const Mui = require('material-ui');
const { AppBar, IconButton } = Mui;
let MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');
let IconMenu = require('material-ui/lib/menus/icon-menu');
let MenuItem = require('material-ui/lib/menus/menu-item');
let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


class HeaderMui extends Component {
  render() {
    return (
      <AppBar
        title="HearMe"
        iconElementRight={
          <IconMenu iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
          }>
            <MenuItem primaryText="Refresh" />
            <MenuItem primaryText="Help" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
      } />
    )
  }
}

export default HeaderMui;