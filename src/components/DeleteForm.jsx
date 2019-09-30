import React from 'react';

const DeleteForm = (props) => {
    const { onClose, onDelete } = props;
  return (
    <div style={{fontSize: 13, fontWeight: '600', width: 500 }}>
      <div className='modal-header' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <div>Are you sure you want to delete this lead?</div>
        <i class="material-icons" onClick={onClose}>
          clear
        </i>
      </div>
      <div className='row' style={{ marginBottom: 10, marginTop: 10 }}>
        <button onClick={()=>{ onClose(); onDelete(); }} className='secondary-button'>
          Confirm
        </button>
        <button onClick={onClose} className='secondary-button'>
          Cancel
        </button>
      </div>
    </div>
  )
}

export default DeleteForm;