import React, {Component} from 'react';

import List from './List';

const Data = [
  {
    "name": "Gideon Ogongo",
    "Role": "Software Developer"
  },
  {
    "name": "Sarah Jones",
    "Role": "UI Developer"
  },
  {
    "name": "Ray Ledwaba",
    "Role": "CEO"
  }
];


class App extends Component{
  render(){
    return(
      <List listData={Data} />
    )
  }
}

export default App;
