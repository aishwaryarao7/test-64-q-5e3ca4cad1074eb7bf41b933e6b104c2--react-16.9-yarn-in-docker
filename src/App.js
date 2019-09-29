import React from 'react';
import './styles/styles.css';
import LeadTable from './components/LeadTable';

function App() {
  return (
    <div className="App">
      <div className='cj-row'>
        <button className='cj-button'>Add Lead</button>
        <input className='cj-search' placeholder='Search Lead' onChange={(e)=>{console.log(e.target.value)}} />   
      </div>
      <LeadTable />
    </div>
  );
}

export default App;
