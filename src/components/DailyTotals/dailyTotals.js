import React from "react";
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col } from "reactstrap";
import { DailyData } from './dailyData';
import './dailyTotals.css';
import Example from '../Collapse/collapse'
class DailyTotals extends React.Component {
  render() {
    return (
      <>
        <div className="content">
        <Row className='row'>

{DailyData.map((item, index) => {
    console.log(item)
    
    return  (
      <Card className='card'>
          <CardBody className='cardBody'>
            <CardTitle className='cardTitle'>{item.date}</CardTitle>
            <Example className='listItem'>Total Oil: {item.oil} </Example>
            <p className='listItem'>Total Gas: {item.gas}</p>
            <p className='listItem'>Total Water: {item.water}</p>
            <p className='listItem'>Total Open Hours: {item.pumpingHours}</p>
            <p className='listItem'>Sites With Down Codes: {item.downCode}</p>
            <p className='listItem'>Daily Data Completion: {item.siteCompletion}</p>
          </CardBody>
      </Card>
        );
    })}
</Row>
        </div>
      </>
    );
  }
}

export default DailyTotals;
