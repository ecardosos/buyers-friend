import React from 'react';
import './SaleSection.scss';
import ClientData from './ClientData/ClientData';
import PaymentData from './PaymentData/PaymentData';
import ProductData from './ProductData/ProductData';
import SaleData from './SaleData/SaleData';

import axios from 'axios';
class SaleSection extends React.Component<any,any> {
  constructor(props=null){
    super(props);
    this.state = {
      sale_details: {
        itens: [],
        subsidiary: '',
        date_sale: Date().toLocaleString(),
        payment_method: '',
        total_amount_in_cents: 0        
      },
      client_details: {
        name: '',
        document: ''
      },
      payment_details: {
        card_number: '',
        card_holder: ''
      }
    };

    this.onChangePaymentData = this.onChangePaymentData.bind(this);
    this.onChangeClientData = this.onChangeClientData.bind(this);
    this.onGetProductData = this.onGetProductData.bind(this);
    this.onGetSaleData = this.onGetSaleData.bind(this);
    this.updateSaleData = this.updateSaleData.bind(this);

    this.sendData = this.sendData.bind(this);

  }

  render (): JSX.Element {
    return (
      <div className='SaleSection' data-testid="SaleSection">
        <div className='header'>Fazer uma venda</div>
        <div className='body'>  
          <div className='section-row col-md-12'>
            <div className='payment col-md-8'>
              <PaymentData onChange={this.onChangePaymentData}/>
            </div>
            <div className='product col-md-4'>
              <ProductData sendProduct={this.onGetProductData}/>
            </div>
          </div>
          <div className='section-row col-md-12'>
            <div className='client col-md-3'>
              <ClientData onChange={this.onChangeClientData}/>
            </div>
            <div className='sale col-md-9'>
              <SaleData sendSaleData={this.onGetSaleData} updateSaleData={this.updateSaleData}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  onChangePaymentData(data: {card_holder: string, card_number: string}): void {
    this.setState({
      payment_details: {
        card_holder: data.card_holder,
        card_number: data.card_number,
      }});
  }

  onChangeClientData(data: {name: string, document: string}): void {
    this.setState({
      client_details: {
      name: data.name,
      document: data.document
    }});
  }

  onGetProductData(data: {id: string, product_name: string, amount_in_cents: number}): void {
    this.state.sale_details.itens.push({
      id: data.id,
      product_name: data.product_name
    })

    this.setState({
      sale_details:{
        ...this.state.sale_details,
        total_amount_in_cents: this.state.sale_details.total_amount_in_cents += data.amount_in_cents
      }
    });
  }

  onGetSaleData(data: {paymentMethod: string, subsidiary: string}): void {
    this.setState({
      sale_details: {
        ...this.state.sale_details,
        subsidiary: data.subsidiary,
        payment_method: data.paymentMethod
    }});

    this.sendData();
  }

  updateSaleData(): void {

  }

  async sendData(): Promise<void> {
    try {
      let data = this.state;
      console.log(data);
      const response = await axios.post('http://localhost:3000/sales/', data);
      
      console.log(response);
    } catch (err) {
      this.setState({ alertState: 'error'});
    }
  }
}

export default SaleSection;
