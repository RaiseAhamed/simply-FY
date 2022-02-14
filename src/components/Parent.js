import React from 'react'
import { connect } from 'react-redux';
import { useState,useEffect } from 'react';
import Child from './Child'
import {loadParentItem} from '../redux/avatar/avatar-action.js'

const Parent=({loadParentItem,parent_load})=> {
    // const [data,getData]=useState(0);

    useEffect(() => {
      const fetchPost = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              
            },
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          }
        );
        const status = await response.status;
        if(status==200){
          const response_data = await response.json();
          console.log(response_data, "response_data");
          loadParentItem(response_data)
        }
        else{
          alert("invalid Api-calls")
        }

        // getData(response_data)
      };
      fetchPost();
 
    }, []);
  return (
    <div>Parent
          <Child />
    </div>
  )
}


const mapDispatchToProps=(dispatch)=>{
  // debugger
  return{
    loadParentItem:(item)=>dispatch(loadParentItem(item))
  }
}
// const mapStateToProps=(state)=>{
//   debugger
//   return{
//     parent_load:state.avatar.parent_load
//   }
// }

export default connect(null,mapDispatchToProps)(Parent)