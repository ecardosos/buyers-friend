import React from 'react';
import './ProductData.scss';

import axios from 'axios';

class ProductData extends React.Component<any,any> {
  constructor(props=null){
    super(props);
    this.state = {
      product: {
        product_name: '',
        amount_in_cents: ''
      },
      productData: []
    };

    this.onProductChange = this.onProductChange.bind(this);

    this.getProductData = this.getProductData.bind(this);
    this.getProductData();
  }

  onProductChange(e: any) {
    this.setState({
      product: this.state.productData[e.target.value]
    });
  }

  async getProductData() {
    try {
      const response = await axios.get('http://localhost:3000/products/');

      response.data.map((entry: {}) => {        
        return this.state.productData.push(entry);
      });   

      // console.log(this.state.productData);
    }
    catch (err) {
      console.log(err);
    }
  }

  render (): JSX.Element {
    return (
      <div className='ProductData' data-testid="ProductData">
        <div className='header'>Produtos</div>
        <div className='body'>
          <form>
            <label>Código do produto</label>
            <br/>
            <select onChange={this.onProductChange}>
            { this.state.productData && this.state.productData.map((item: { id:string }, index: any) => {
              return (<option key={index} value={index}> {item.id} </option>);
            }
            )}
            </select>
            <br/>
            <label>Nome do Produto</label>
            <br/>
            <input value={this.state.product.product_name} type='text' disabled/>
            <br/>
            <label>Valor do Produto</label>
            <br/>
              <input value={this.state.product.amount_in_cents} type='text' disabled/>

            <button onClick={(e) => {              
              e.preventDefault();
              this.props.sendProduct(this.state.product)
              }}>ADICIONAR PRODUTO</button>
          </form>
        </div>
      </div>
    );
  }  
}

export default ProductData;
