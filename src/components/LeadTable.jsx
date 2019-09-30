import React from 'react';

const leadDataRows = (data, onDeleteClick, addComm, setId) => {
  return (data.map((d)=> {
    return (
      <tr key={d.id}>
        <td className='data-box'>{d.first_name} {d.last_name}</td>
        <td className='data-box'>{d.email}</td>
        <td className='data-box'>{d.mobile}</td>
        <td className='data-box'>{d.location_type}</td>
        <td className='data-box'>{d.location_string}</td>
        <td className='data-box'>
        <i className="material-icons" onClick={()=> { setId(d.id); addComm(); }}>
            create
        </i>
        <i className="material-icons" onClick={()=> { onDeleteClick(); setId(d.id); }}>
            delete
        </i></td>
      </tr>
    )
  })
);
}

const LeadTable = (props) => {
  const { data, onDeleteClick, addComm, setId } = props;
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
         {leadDataRows(data, onDeleteClick, addComm, setId)}
        </tbody>
      </table>
    </div>
  )
}

export default LeadTable;