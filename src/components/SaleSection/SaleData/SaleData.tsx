import React from 'react';
import './SaleData.scss';

import axios from 'axios';

class SaleData extends React.Component<any,any> {
  constructor(props=null){
    super(props);
    this.state = {
      subsidiaryData: [],
      paymentData: [],
      products: [
        {
          "id": "0001",
          "product_name": "COMPUTADOR RAZOR",
          "amount_in_cents": 500000
        },
        {
          "id": "0002",
          "product_name": "MONITOR SEM MARCA",
          "amount_in_cents": 20000
        },
        {
          "id": "0003",
          "product_name": "BIKE DO JOÃO",
          "amount_in_cents": 100000
        },
      ],
      data: {
        subsidiary: '',
        paymentMethod: ''}
    };

    this.onPaymentChange = this.onPaymentChange.bind(this);
    this.onSubsidiaryChange = this.onSubsidiaryChange.bind(this);
    
    this.getPaymentData = this.getPaymentData.bind(this);
    this.getPaymentData();

    this.getSubsidiaryData = this.getSubsidiaryData.bind(this);
    this.getSubsidiaryData();
  }

  onPaymentChange(e: any) {
    this.setState({
      data: {
        subsidiary: this.state.data.subsidiary,
        paymentMethod: this.state.paymentData[e.target.value]
      }
    });
    console.log(e.target.value, this.state.data);
  }

  onSubsidiaryChange(e: any) {
    this.setState({
      data: {
        subsidiary: this.state.paymentData[e.target.value],
        paymentMethod: this.state.data.paymentMethod
      }
    });

    console.log(e.target.value, this.state.data);
  }

  async getSubsidiaryData() {
    try {
      const response = await axios.get('http://localhost:3000/subsidiary/');

      response.data.map((entry: {}) => {        
        return this.state.subsidiaryData.push(entry);
      });   

      // console.log(this.state.subsidiaryData);
    }
    catch (err) {
      console.log(err);
    }
  }

  async getPaymentData() {
    try {
      const response = await axios.get('http://localhost:3000/paymentMethod/');

      response.data.map((entry: {}) => {        
        return this.state.paymentData.push(entry);
      });   

      // console.log(this.state.paymentData);
    }
    catch (err) {
      console.log(err);
    }
  }

  render (): JSX.Element {
    return (
      <div className='SaleData' data-testid="SaleData">
        <div className='header'>Dados da venda</div>
        <div className='body'>
          <form>
            <div className='col-md-4'>
              <label>Resumo do Pedido</label>
              <div className='product-list'>
                { this.state.products && this.state.products.map((item: { id: string, product_name: string }) => {
                  return (
                    <div className='item'> {item.id} - {item.product_name}</div>
                  );
                }
                )}
              </div>
            </div>
            
            <div className='col-md-8'>
              <div className='col-md-12 row'>
                <div className='col-md-6'>
                  <label>Filial</label>
                  <br/>
                  <select onChange={this.onSubsidiaryChange}>
                  { this.state.subsidiaryData && this.state.subsidiaryData.map((item: { name: string }, index: any) => {
                    return (<option key={index} value={index}> {item.name} </option>);
                    }
                  )}
                  </select>
                </div>
                
                <div className='col-md-6'>
                  <label>Valor da Venda</label>
                  <br/>
                  <input type='text' disabled/>
                </div>
              </div>

              <div className='col-md-12 row'>
                <div className='col-md-6'>
                  <label>Tipo do Pagamento</label>
                  <br/>
                  <select onChange={this.onPaymentChange}>
                  { this.state.paymentData && this.state.paymentData.map((item: { name:string }, index: any) => {
                    return (<option key={index} value={index}> {item.name} </option>);
                    }
                  )}
                  </select>
                </div>

                <div className='col-md-6'>
                  <label>Parcelas</label>
                  <br/>
                  <select>
                    <option value={this.state.product}> 1 </option>
                    <option value={this.state.product}> 2 </option>
                    <option value={this.state.product}> 3 </option>
                  </select>
                </div>
              </div> 
            </div>
          </form>
        </div>

        <button onClick={(e) => {              
              e.preventDefault();
              this.props.sendSaleData(this.state.data)
              }}>FINALIZAR VENDA</button>
      </div>
    );
  }
}

export default SaleData;
