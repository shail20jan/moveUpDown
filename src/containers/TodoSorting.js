import React from 'react';
import { connect } from 'react-redux' ;
import { sortList } from '../actions'

  const mapDispatchToProps = (dispatch) => ({
    list: (id) => dispatch(sortList(id))
  })


const SortTodo = ({list}) => {

  const arrowUp  = {
    cursor: 'pointer',
    width: 0,
    height: 0, 
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',    
    borderBottom: '20px solid gray',
    listStyle:'none'

  }

  const arrowDown  = {
    cursor: 'pointer',
    width: 0,
    height: 0, 
    borderLeft: '20px solid transparent',
    borderRight: '20px solid transparent',    
    borderTop: '20px solid gray',
    listStyle:'none'
  }

  return (      
    <div>
        <ul>
            <li id="up" style={arrowUp} onClick={() => list(1)}></li>
            <li style={{listStyle:'none'}}>&nbsp;</li>
            <li id="down" style={arrowDown}  onClick={() => list(-1)}></li>
        </ul>
    </div>
  )
}


export default connect(
    null,
    mapDispatchToProps
  )(SortTodo)
