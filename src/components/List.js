import React, {Component} from 'react';

import ListItem from './ListItem';

class List extends Component{


  render(){
      const dataagain = this.props.listData.map((data)=>
          <ListItem singleData = {data}/>
      )
    return(
        <ul>
          {dataagain}
        </ul>
    )
  }
}

export default List;
