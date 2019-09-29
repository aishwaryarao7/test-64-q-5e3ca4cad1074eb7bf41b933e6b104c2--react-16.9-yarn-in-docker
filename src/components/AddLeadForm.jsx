import React from 'react';

const AddLeadForm = (props) => {
  const { onClose } = props;
  return (
    <div style={{fontSize: 13, fontWeight: '600' }}>
      <div className='modal-header' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div>Add Lead</div>
        <i class="material-icons" onClick={onClose}>
          clear
        </i>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div>
          <div style={{ textAlign: 'left', marginLeft: 10, marginTop: 10 }}>First Name</div>
          <input className='modal-input' />
        </div>
        <div>
          <div style={{ textAlign: 'left', marginLeft: 10, marginTop: 10 }}>Last Name</div>
          <input className='modal-input' />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div>
          <div style={{ textAlign: 'left', marginLeft: 10, marginTop: 10 }}>Email Address</div>
          <input className='modal-input' />
        </div>
        <div>
          <div style={{ textAlign: 'left', marginLeft: 10, marginTop: 10 }}>Mobile</div>
          <input className='modal-input' />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div>
          <div style={{ textAlign: 'left', marginLeft: 10, marginTop: 10 }}>Location Type</div>
          <input className='modal-input' />
        </div>
        <div>
          <div style={{ textAlign: 'left', marginLeft: 10, marginTop: 10 }}>Location String</div>
          <input className='modal-input' />
        </div>
      </div>
      <div className='row'>
        <button className='secondary-button' onClick={onClose}>Close</button>
        <button className='secondary-button'>Save</button>
      </div>
    </div>
  )
}

export default AddLeadForm;