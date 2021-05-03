import React from 'react';
import ReactInputMask from "react-input-mask";
import './PaymentData.scss';

import visa from '../../../assets/icons svg/visa-color_large.svg';
import mastercard from '../../../assets/icons svg/mastercard-color_large.svg';
import americanExpress from '../../../assets/icons svg/americanexpress-color-large.svg';



class PaymentData extends React.Component<any,any> {
  constructor(props=null){
    super(props);
    this.state = {
      card_number: '',
      card_holder: ''
    }; 
    this.onNameChange = this.onNameChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
  }

  onNameChange(value: any) {
    this.setState({
      card_holder: value
    });
  }

  onNumberChange(value: any) {
    this.setState({
      card_number: value
    });
  }

  render (): JSX.Element {
    return (
      <div className='PaymentData' data-testid="PaymentData">
        <div className='header'>Dados da forma de pagamento</div>
        <div className='body'>
          <div className='flex-section col-md-12'>
            <div className='flex-section col-md-8'>
              <div className='col-md-7'>
                <label>Número do cartão</label>
                <br/>
                <ReactInputMask onChange={
                  (e) => {
                    this.onNumberChange(e.target.value)
                    this.props.onChange(this.state);
                  }}  mask="9999 9999 9999 9999" />
                <br/>
                <label>Titular do cartão</label>
                <br/>
                <input onChange={
                  (e) => {
                    this.onNameChange(e.target.value)
                    this.props.onChange(this.state);
                }} type='text'/>
              </div>
          
              <div className='col-md-5'>
                <label>Data de expiração</label>
                <br/>
                <ReactInputMask className='small-input' mask="99/9999" />
                <br/>
                <label>CVV</label>
                <br/>
                <ReactInputMask className='small-input' mask="999" />
              </div>
            </div>
            <br/>
            <br/>

            <div className='col-md-4'>
              <div className='card'>
                <div className='card-band'></div>
                {/* <div className='card-number'></div>
                <div>DATA VENCIMENTO</div> 12/2020
                <div>CVV</div> 000 */}
              </div>
            </div>
          </div>

          <div className='col-md-12 bandeiras'>
            <label className='col-md-12'>Bandeiras aceitas</label>
            <img alt='visa' src={visa}></img>
            <img alt='mastercard' src={mastercard}></img>
            <img alt='americanExpress' src={americanExpress}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentData;
