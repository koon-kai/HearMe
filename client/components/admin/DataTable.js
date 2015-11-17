


import React, { PropTypes, Component } from 'react';
const Mui = require('material-ui');
const { Table, TableRow, TableHeader, TableBody, TableFooter, TableRowColumn, TableHeaderColumn } = Mui;
import tools from '../../utils/tools';


class DataTable extends Component {

  render() {
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      height: '300px',
    };

    const { data } = this.props;

    return (
      <Table
        fixedHeader={this.state.fixedHeader}
        fixedFooter={this.state.fixedFooter}
        selectable={this.state.selectable}
        multiSelectable={this.state.multiSelectable}
        onRowSelection={this._onRowSelection}>
        <TableHeader enableSelectAll={this.state.enableSelectAll}>
          <TableRow>
            <TableHeaderColumn >ID</TableHeaderColumn>
            <TableHeaderColumn >Title</TableHeaderColumn>
            <TableHeaderColumn >Create date</TableHeaderColumn>
            <TableHeaderColumn ></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          deselectOnClickaway={this.state.deselectOnClickaway}
          showRowHover={this.state.showRowHover}
          stripedRows={this.state.stripedRows}>
          {
            data.map( d => {
              return (
                <TableRow selected={true} key={d._id}>
                  <TableRowColumn>{d._id}</TableRowColumn>
                  <TableRowColumn>{d.title}</TableRowColumn>
                  <TableRowColumn>{tools.formatToDateTime(d.createAt)}</TableRowColumn>
                  <TableRowColumn>
                    <a className="btn-floating"><i className="material-icons">open_in_new</i></a>
                  </TableRowColumn>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    )
  }
}

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
};


export default DataTable;