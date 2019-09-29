import React from 'react';

const leadData = [
    {
        "id": 1,
        "updated_at": "2019-06-12T12:11:39.127842Z",
        "created_at": "2019-06-12T12:11:39.127901Z",
        "first_name": "Nilesh",
        "last_name": "Agarwal",
        "mobile": "9871028111",
        "email": "abc@gmail.com",
        "location_type": "City",
        "location_string": "India",
        "status": "Created",
        "communication": null,
        "tags": null
    }
];

const leadDataRows = (data) => {
  return (data.map((d)=> {
    return (
      <tr key={d.id}>
        <td className='data-box'>{d.first_name} {d.last_name}</td>
        <td className='data-box'>{d.email}</td>
        <td className='data-box'>{d.mobile}</td>
        <td className='data-box'>{d.location_type}</td>
        <td className='data-box'>{d.location_string}</td>
        <td className='data-box'>{'temp'}</td>
      </tr>
    )
  })
);
}

const LeadTable = (props) => {
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
         {leadDataRows(leadData)}
        </tbody>
      </table>
    </div>
  )
}

export default LeadTable;