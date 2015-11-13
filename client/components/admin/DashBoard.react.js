import React, { Component } from 'react';
import TableMui from './Table.mui';
import HeaderMui from './Header.mui.js';
const Mui = require('material-ui');
const { List, ListItem, DropDownMenu, DropDownIcon, RaisedButton} = Mui;
let ContentInbox = require('material-ui/lib/svg-icons/content/inbox');
let ActionGrade = require('material-ui/lib/svg-icons/action/grade');
let ContentSend = require('material-ui/lib/svg-icons/content/send');
let ContentDrafts = require('material-ui/lib/svg-icons/content/drafts');
const DatePicker = require('material-ui/lib/date-picker/date-picker');
const DatePickerDialog = require('material-ui/lib/date-picker/date-picker-dialog');
const Toolbar = require('material-ui/lib/toolbar/toolbar');
const ToolbarGroup = require('material-ui/lib/toolbar/toolbar-group');
const ToolbarSeparator = require('material-ui/lib/toolbar/toolbar-separator');
const ToolbarTitle = require('material-ui/lib/toolbar/toolbar-title');
let injectTapEventPlugin = require("react-tap-event-plugin");
const FontIcon = require('material-ui/lib/font-icon');
injectTapEventPlugin();

class Navbar extends Component {
  render() {
    return (
      <nav className="white">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">HearMe</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Post</a></li>
            <li><a href="badges.html">Photo</a></li>
            <li><a href="collapsible.html">Note</a></li>
            <li><a href="collapsible.html">Message</a></li>
          </ul>
        </div>
      </nav>
    )
  }
}


class Content extends Component {

  componentDidMount() {
     // $('.fixed-action-btn').openFAB();
  }

  render() {
   let menuItems = [
   { payload: '1', text: 'Never' },
   { payload: '2', text: 'Every Night' },
   { payload: '3', text: 'Weeknights' },
   { payload: '4', text: 'Weekends' },
   { payload: '5', text: 'Weekly' },
];
    return (
      <div className="row">
        <div className="col s2">
          <div className="left-nav">
          <List>
            <ListItem primaryText="Status" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Post" leftIcon={<ContentSend />} />
            <ListItem primaryText="Note" leftIcon={<ActionGrade />} />
            <ListItem primaryText="Photo" leftIcon={<ContentDrafts />} />
            <ListItem primaryText="Message" leftIcon={<ContentDrafts />} />
          </List>
          </div>
        </div>
        <div className="col s10 content">

          <ToolbarBox/>

          <TableMui />
        </div>
      </div>
    )
  }
}
       

class ToolbarBox extends Component {
  render() {

    let filterOptions = [
      { payload: '1', text: 'All Broadcasts' },
      { payload: '2', text: 'All Voice' },
      { payload: '3', text: 'All Text' },
      { payload: '4', text: 'Complete Voice' },
      { payload: '5', text: 'Complete Text' },
      { payload: '6', text: 'Active Voice' },
      { payload: '7', text: 'Active Text' },
    ];
    let iconMenuItems = [
      { payload: '1', text: 'Download' },
      { payload: '2', text: 'More Info' }
    ];
    return (
      <Toolbar>
        <ToolbarGroup key={0} float="left">
          <DropDownMenu menuItems={filterOptions} />
        </ToolbarGroup>
    
        <ToolbarGroup key={2} float="right">
          <FontIcon className="material-icons">reorder</FontIcon>
          <DropDownIcon iconClassName="icon-navigation-expand-more" menuItems={iconMenuItems} />
          <ToolbarSeparator/>
          <RaisedButton label="Create Broadcast" primary={true} />
        </ToolbarGroup>
        <ToolbarGroup key={1} float="right">
          <DatePicker hintText="Create Date" />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}


class EditBox extends Component {
  render() {
    return (
      <div className="fixed-action-btn" style={{bottom: '45px',right: '24px'}}>
        <a className="btn-floating btn-large red">
          <i className="large material-icons">mode_edit</i>
        </a>
        <ul>
          <li><a className="btn-floating red" href="/admin/posts/add"><i className="material-icons">queue</i></a></li>
          <li><a className="btn-floating yellow darken-1"><i className="material-icons">speaker_notes</i></a></li>
          <li><a className="btn-floating green"><i className="material-icons">picture_in_picture</i></a></li>
          <li><a className="btn-floating blue"><i className="material-icons">chat</i></a></li>
        </ul>
      </div>
    )
  }
}


class DashBoard extends Component {
  render() {
    return (
      <div>
        <HeaderMui />
        <Content />
        <EditBox />
      </div>
    )
  }
}


export default DashBoard;