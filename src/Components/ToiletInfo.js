import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import '../styles/toiletInfo.css'

class ToiletInfo extends Component {
 
  render(props) {
    // const props = this.props.data;
    return (
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>#{this.props.data.id}</th>
              <th>Device ID</th>
              <th>IMEI</th>
              <th>SMS Gate</th>
              <th>Register Date</th>
              <th>Activation Date</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>{this.props.data.deviceId}</td>
              <td>{this.props.data.imei}</td>
              <td>{this.props.data.smsGate}</td>
              <td>{this.props.data.registerDate}</td>
              <td>{this.props.data.activationDate}</td>
              <td>{this.props.data.number}</td>
            </tr>
          </tbody>
        </Table>
        <Table responsive className="secondTable">
          <thead >
            <tr>
              <th></th>
              <th>Wake Up Cycles Left</th>
              <th>Last Wake Up Time</th>
              <th>Next Wake Up Time</th>
              <th>Customer Name</th>
              <th>Is Active</th>
              <th>Response Timeout</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>{this.props.data.wakeUpCyclesLeft}</td>
              <td>{this.props.data.lastWakeUpTime}</td>
              <td>{this.props.data.nextWakeUpTime}</td>
              <td>{this.props.data.customerName}</td>
              <td>{this.props.data.isActive}</td>
              <td>{this.props.data.responseTimeout}</td>
            </tr>
          </tbody>
        </Table>;
      </div>
    );
  }
}

export default ToiletInfo;