import React, { Component } from 'react';
import {Grid, Row, Col, Table} from 'react-bootstrap';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import "../styles/map.css";

class Location extends Component {

  render() {
    const GoogleMapLocation = withGoogleMap(props => (
       <GoogleMap
         defaultCenter = { { lat: this.props.data.location[0].point.lat, lng:  this.props.data.location[0].point.lng } }
         defaultZoom = { 15 }
       >
       </GoogleMap>
    ));
    return(
       <div>
         <Grid>
           <Row className="">
             <Col xs={12} md={6} sm={12}>
                <GoogleMapLocation
                
                  containerElement={ <div 
                    style={
                      { 
                        height: `300px`, width: '300px' 
                      }
                    } 
                    /> 
                  }
                  mapElement={ <div style={
                    { 
                      height: `100%`,
                      width: `100%` 
                    }
                  } 
                  /> 
                }
                />
            </Col>
            <Col xs={12} md={6}>
            <Table responsive>
  <thead>
    <tr>
      <th>#173</th>
      <th>Address</th>
      <th>Local Point</th>
      <th>GPS Point</th>
      <th>Soil Sensor</th>
      <th>Tip Sensor</th>
      <th>Water Level</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td>N/A</td>
      <td>N/A</td>
      <td>N/A</td>
      <td>{this.props.data.soil_sensor}</td>
      <td>{this.props.data.tip_sensor}</td>
      <td>{this.props.data.water_level}</td>
    </tr>
  </tbody>
</Table>;
            </Col>
           </Row>
         </Grid>
       </div>
    );
    }

}

export default Location;