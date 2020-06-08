import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ServerTable from 'react-strap-table';

const url = 'http://react-strap-table.com/users';
const columns = ['id', 'name', 'email', 'created_at'];
const options = {  
   headings: {id: '#', created_at: 'Created At'},  
   sortable: ['name', 'email']  
};  
class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <h1>PavanVanam - Yay! Thanks React for Warm Welcoming..:-)</h1>
      // </div>
      <ServerTable columns={columns}  
      url={url}  
      options={options} 
      bordered hover/>  
    );
  }
}


// return (  
//     <ServerTable columns={columns}  
// 	   url={url}  
// 	   options={options} 
// 	   bordered hover/>  
// );

export default App;