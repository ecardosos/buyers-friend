import React from 'react';
import ReactInputMask from "react-input-mask";
import './ClientData.scss';

class ClientData extends React.Component<any,any> {
  constructor(props=null){
    super(props);
    this.state = {
      name: '',
      document: ''
    }; 
    this.onNameChange = this.onNameChange.bind(this);
    this.onDocumentChange = this.onDocumentChange.bind(this);
  }

  onNameChange(value: any) {
    this.setState({
      name: value
    });
  }

  onDocumentChange(value: any) {
    this.setState({
      document: value
    });
  }

  render (): JSX.Element {
    return (
      <div className='ClientData' data-testid="ClientData">
        <div className='header'>Dados do Cliente</div>
        <div className='body'>
          <label>Nome do Cliente</label>
          <br/>
          <input onChange={
            (e) => {
              this.onNameChange(e.target.value)
              this.props.onChange(this.state);
          }} type='text'/>
          <br/>
          <label>Documento do cliente</label>
          <br/>
          <ReactInputMask onChange={
            (e) => {
              this.onDocumentChange(e.target.value)
              this.props.onChange(this.state);
          }} mask="999.999.999-99" />
        </div>
      </div>
    );
  }
}

export default ClientData;
