import React from 'react'
import { connect } from 'react-redux';
import { useEffect } from 'react';
import {loadChildItem} from '../redux/avatar/avatar-action.js'


function Child({parent_load,loadChildItem}) {
  console.log(parent_load,"parent_load")
  let arr=[]
  useEffect(() => {
    const fetchPost = async () => {
   
      // const myPromise = new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve(parent_load);
      //   }, 300);
      // });
      //  Promise.all(parent_load).then(i=>{
      //   debugger
      //   console.log(i)
      // })
        parent_load.forEach(async (i)=>{

         
      const response = await fetch(
        `https://avatars.dicebear.com/v2/avataaars/${i}.svg?options[mood][]=happy`,
      );
      const status = await response.status;
      if(status==200){
        const response_data = await response.json();
        console.log(response_data, "response_data");
        arr.push(response_data)
        // await loadChildItem(response_data)
      }
      else{
        alert("invalid Api-calls")
      }
    })
    // )
      // getData(response_data)
    };
    if(parent_load.length){
      fetchPost();
    }


  }, [parent_load]);
  return (
    <div>Child</div>
  )
}

const mapDispatchToProps=(dispatch)=>{
  debugger
  return{
    loadChildItem:(item)=>dispatch(loadChildItem(item))
  }
}
const mapStateToProps=(state)=>{
  debugger
  return{
    parent_load:state.avatar.parent_load
  }
}

export default connect(mapStateToProps)(Child)