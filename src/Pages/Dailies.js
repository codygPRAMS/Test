
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col } from "reactstrap";
import DailyTotals from '../components/DailyTotals/dailyTotals';
import Example from '../components/Collapse/collapse';

class Dailies extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
              <DailyTotals />
          </Row>
          <br />
          <Row>
              <Example />
          </Row>
        </div>
      </>
    );
  }
}

export default Dailies;

