import React from 'react';

class AddLeadForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {firstName: '', lastName: '', email: '', mobile: '', locString: '', locType: ''}
  }

  onFormSubmit(onAdd) {
    onAdd({
      "first_name": this.state.firstName,
      "last_name": this.state.lastName,
      "mobile": this.state.mobile,
      "email": this.state.email,
      "location_type": this.state.locType,
      "location_string": this.state.locString
    })
  }

  render() {
    const { onClose, onAdd } = this.props;
    const { firstName, lastName, email, mobile, locString, locType } = this.state;
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
            <input className='modal-input' value={firstName} onChange={(e)=>{this.setState({firstName: e.target.value})}} />
          </div>
          <div>
            <div style={{ textAlign: 'left', marginLeft: 10, marginTop: 10 }}>Last Name</div>
            <input className='modal-input' value={lastName} onChange={(e)=>{this.setState({lastName: e.target.value})}} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div>
            <div style={{ textAlign: 'left', marginLeft: 10, marginTop: 10 }}>Email Address</div>
            <input className='modal-input' value={email} onChange={(e)=>{this.setState({email: e.target.value})}} />
          </div>
          <div>
            <div style={{ textAlign: 'left', marginLeft: 10, marginTop: 10 }}>Mobile</div>
            <input className='modal-input' value={mobile} onChange={(e)=>{this.setState({mobile: e.target.value})}} />
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div>
            <div style={{ textAlign: 'left', marginLeft: 10, marginTop: 10 }}>Location Type</div>
            <input className='modal-input' value={locType} onChange={(e)=>{this.setState({locType: e.target.value})}} />
          </div>
          <div>
            <div style={{ textAlign: 'left', marginLeft: 10, marginTop: 10 }}>Location String</div>
            <input className='modal-input' value={locString} onChange={(e)=>{this.setState({locString: e.target.value})}} />
          </div>
        </div>
        <div className='row'>
          <button className='secondary-button' onClick={onClose}>Close</button>
          <button className='secondary-button' onClick={()=>{this.onFormSubmit(onAdd); onClose()}}>Save</button>
        </div>
      </div>
    )
  }
}

export default AddLeadForm;