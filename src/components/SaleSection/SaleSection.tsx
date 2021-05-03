import React from 'react';
import './SaleSection.scss';
import ClientData from './ClientData/ClientData';
import PaymentData from './PaymentData/PaymentData';
import ProductData from './ProductData/ProductData';
import SaleData from './SaleData/SaleData';

// import '';


class SaleSection extends React.Component<any,any> {
  constructor(props=null){
    super(props);
    this.state = {};

    this.onChangePaymentData = this.onChangePaymentData.bind(this);
    this.onChangeClientData = this.onChangeClientData.bind(this);
    this.onGetProductData = this.onGetProductData.bind(this);
    this.onGetSaleData = this.onGetSaleData.bind(this);
    this.updateSaleData = this.updateSaleData.bind(this);

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

  onChangePaymentData(data: {}): void {
    console.log(data);
  }

  onChangeClientData(data: {}): void {
    console.log(data);
  }

  onGetProductData(data: {}): void {
    console.log(data);
  }

  onGetSaleData(data: {}): void {
    console.log(data);
  }

  updateSaleData(): void {

  }
}

export default SaleSection;
