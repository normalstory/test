import React, { Component } from 'react';

import Mycomponent from './Mycomponent';
import MycomponentClass from './MycomponentClass';
import ComponentStateClass from './ComponentStateClass';
import HooksBasic from './HooksBasic';
import EventTest from './EventTest';
import EventByFunc from './EventByFunc';
import ReactMapTest from './ReactMapTest';

class ReactBookE2 extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Mycomponent name={'react'} favoriteNum={1}>
              component function
            </Mycomponent>
          </li>
          <li>
            <MycomponentClass name={'React'} favonum={9}>
              component class
            </MycomponentClass>
          </li>
          <li>
            <ComponentStateClass>State in the component of Class</ComponentStateClass>
          </li>
          <li>
            <HooksBasic></HooksBasic>
          </li>
          <li>
            <EventTest />
          </li>
          <li>
            <EventByFunc />
          </li>
          <li>
            <ReactMapTest />
          </li>
        </ul>
      </div>
    );
  }
}

export default ReactBookE2;
