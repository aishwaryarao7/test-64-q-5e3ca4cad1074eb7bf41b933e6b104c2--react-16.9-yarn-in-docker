import React from 'react';

const DeleteForm = (props) => {
    const { onClose } = props;
  return (
    <div style={{fontSize: 13, fontWeight: '600', width: 500 }}>
      <div className='modal-header' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div>Mark Communication</div>
        <i class="material-icons" onClick={onClose}>
          clear
        </i>
      </div>
      <div className='row'>
        <div style={{ textAlign: 'left', marginLeft: 20, marginTop: 10 }}>Communication</div>
        <input className='modal-input' style={{minHeight: 100, marginLeft: 0, width: '90%'}} />
      </div>
      <div className='row' style={{ marginBottom: 10 }}>
        <button onClick={onClose} className='secondary-button'>
          Mark Communication
        </button>
      </div>
    </div>
  )
}

export default DeleteForm;