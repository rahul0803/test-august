import React, { useState } from 'react'
import { useSelector } from 'react-redux'


const Details = () => {
const state_data = useSelector(state => state.data.data)

const item_details = JSON.parse(localStorage.getItem('item'))
const [details, setDetails] = useState(false)
const [info, setInfo] = useState(false)

console.log(item_details)

function displayDetails(){
setDetails(true)
setInfo(false)
}

function displayInfo(){
setInfo(true)
setDetails(false)
}

const filteredItems = state_data.filter(item => item.id !== state_data.id)

  return (
    <div> 
    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>

    <div style={{width: '481px', height: '401px', marginLeft: '45px'}}>
    <h1 style={{marginLeft: '20px', marginTop: '30px'}}> Post Number {item_details.id} </h1>
      <img src={`https://picsum.photos/200?random=${item_details.id}`} alt={item_details.title} style={{width: '461px', height: '299px', marginTop: '10px'}}/>

      <h3> {item_details.title} </h3>
    </div>

    <div style={{width: '400px', marginTop: '80px', marginLeft: '40px'}}>
    
     <button onClick={displayDetails} style={{width: '65px', height: '23px', borderRadius: '8px', marginInline: '20px'}}> Details </button> 
     
     <button onClick={displayInfo} style={{width: '65px', height: '23px', borderRadius: '8px'}}> User Info </button> 

    {
      details? <p style={{marginTop: '15px'}}> {item_details.body} </p> : null
    }

    {
      info? <p style={{marginTop: '15px', marginLeft: '25px'}}> Post was Posted by {item_details.id} </p> : null
    }

   </div>

    </div>

    <h1 style={{marginLeft: '40px', marginTop: '40px'}}> More Posts </h1> 

    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
    
      {
        filteredItems && (
          filteredItems.map((item)=> (
            <div key={item.id} style={{width: '451px', height: '401px', marginLeft: '25px'}}>
            <img src={`https://picsum.photos/200?random=${item.id}`}style={{width: '401px', height: '279px', marginTop: '20px'}}/>
            <h3> {item.title} </h3>
            </div>
          ))
        )
      }
    </div>

    </div>
  )
}

export default Details
