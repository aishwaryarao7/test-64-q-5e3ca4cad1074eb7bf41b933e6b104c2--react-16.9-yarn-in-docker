import React, {useState} from 'react';

const CommForm = (props) => {
  const { onClose, onCommUpdate } = props;
  const { comm, setComm } = useState({});
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
        <input className='modal-input' value={comm} style={{minHeight: 100, marginLeft: 0, width: '90%'}} onChange={(e)=>{setComm(e.target.value)}} />
      </div>
      <div className='row' style={{ marginBottom: 10 }}>
        <button onClick={()=>{onClose(); onCommUpdate(comm);}} className='secondary-button'>
          Mark Communication
        </button>
      </div>
    </div>
  )
}

export default CommForm;