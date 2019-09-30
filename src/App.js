import React from 'react';
import './styles/styles.css';
import LeadTable from './components/LeadTable';
import AddLeadForm from './components/AddLeadForm';
import DeleteForm from './components/DeleteForm';
import Modal from './components/Modal';
import CommForm from './components/CommForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], addLead: false, deleteLead: false, addComm: false, id: ''};
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/api/leads/?location_string=India', {
      method: 'GET',
    });
    const json = await response.json();
    this.setState({ data: json});
  }

  addNewLead(newLead) {
    fetch('http://localhost:8080/api/leads/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body:JSON.stringify(newLead)
    });
  }

  onDeleteLead(id) {
    fetch(`http://localhost:8080/api/leads/${id}/`, {
      method: 'DELETE',
    });
  }

  onCommUpdate(body) {
    fetch(`http://localhost:8080/api/mark_lead/${this.state.id}/`, {
      method: 'PUT',
      body: JSON.stringify(body)
    });
  }

  setId = (value) => {
    this.setState({ id: value });
  }

  render() {
    const { data, addLead, deleteLead, addComm, id } = this.state;
    return (
      <div className="App">
        <div className='cj-row'>
          <button className='cj-button' onClick={()=>{this.setState({addLead: true})}}>Add Lead</button>
          <input className='cj-search' placeholder='Search Lead' />   
        </div>
        <LeadTable data={data} onDeleteClick={()=>{this.setState({deleteLead: true}); }} setId={this.setId} addComm={()=>{this.setState({addComm: true})}} />
        <Modal open={addLead}>
          <AddLeadForm onClose={()=>{ this.setState({addLead: false}); }} onAdd={this.addNewLead} />
        </Modal>
        <Modal open={deleteLead}>
          <DeleteForm onDelete={()=>{this.onDeleteLead(id)}} onClose={()=>{ this.setState({deleteLead: false}) }}/>
        </Modal>
        <Modal open={addComm}>
          <CommForm onCommUpdate={this.onCommUpdate} onClose={()=>{ this.setState({addComm: false}) }}/>
        </Modal>
      </div>
    );
  }
}

export default App;
