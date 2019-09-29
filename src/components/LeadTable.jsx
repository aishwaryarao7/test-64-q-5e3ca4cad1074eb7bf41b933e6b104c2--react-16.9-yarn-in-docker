import React, {useState} from 'react';
import Modal from './Modal';
import AddLeadForm from './AddLeadForm';
import DeleteForm from './DeleteForm';

const leadDataRows = (data, onDeleteClick, addComm) => {
  return (data.map((d)=> {
    return (
      <tr key={d.id}>
        <td className='data-box'>{d.first_name} {d.last_name}</td>
        <td className='data-box'>{d.email}</td>
        <td className='data-box'>{d.mobile}</td>
        <td className='data-box'>{d.location_type}</td>
        <td className='data-box'>{d.location_string}</td>
        <td className='data-box'>
        <i class="material-icons" onClick={addComm}>
            create
        </i>
        <i class="material-icons" onClick={onDeleteClick}>
            delete
        </i></td>
      </tr>
    )
  })
);
}

const LeadTable = (props) => {
  const { data, onDeleteClick, addComm } = props;
  const [open, toggleModal] = useState(0);    
  return (
    <div className='row'>
      <table className='cj-table'>
        <thead>
        <tr>
          <td className='cj-table-header'>Name</td>
          <td className='cj-table-header'>Email</td>
          <td className='cj-table-header'>Mobile Num</td>
          <td className='cj-table-header'>Location Type</td>
          <td className='cj-table-header'>Location String</td>
          <td className='cj-table-header'>Action</td>
        </tr>
        </thead>
        <tbody>
         {leadDataRows(data, onDeleteClick, addComm)}
        </tbody>
      </table>
    </div>
  )
}

export default LeadTable;