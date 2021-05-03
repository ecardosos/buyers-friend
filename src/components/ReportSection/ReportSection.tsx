import React from 'react';
import axios from 'axios';

import './ReportSection.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import search from '../../assets/icons svg/loupe 1.svg';
import filter from '../../assets/icons svg/filter 1.svg';


class ReportSection extends React.Component<any,any> {
  constructor(props=null){
    super(props);
    this.state = {
      // isSearchExpanded: false,
      salesData: []
    }; 

    this.getSalesData = this.getSalesData.bind(this);
  }

  componentDidMount() {
    this.getSalesData();
  }

  async getSalesData(filter: string = '') {
    // let params = {};

    // if(filter.length > 0) params = {'client_details.name': filter};

    try {
      const response = await axios.get('http://localhost:3000/sales');

      response.data.map((entry: {}) => {        
        return this.state.salesData.push(entry);
      });     

      // console.log(this.state.salesData);
    }
    catch (err) {
      console.log(err);
    }
  }

  render (): JSX.Element {
      return (
      <div className='ReportSection' data-testid="ReportSection">
        <div className='header'>Histórico de Vendas</div>
        <div className='body'>
        <button><img alt='filter' src={filter}></img> Filtros Avançados</button>
        <button><img alt='search' src={search}></img></button>
        {this.state.salesData}

        <table className="table standard-table table-striped">
                <thead>
                    <tr>
                        <th>DATA DA VENDA</th>
                        <th>VALOR</th>
                        <th>NOME DO CLIENTE</th>
                        <th>DOCUMENTO DO CLIENTE</th>
                        <th>MÉTODO DE PAGAMENTO</th>
                        <th>FILIAL</th>
                    </tr>
                </thead>
                <tbody>
                { this.state.salesData && this.state.salesData.map(
                  (item: {sale_details: {date_sale: string, payment_method: string, subsidiary: string, total_amount_in_cents: number},
                    client_details: {name: string, document: string}}) => {
                    return (<tr>
                        <td> {item.sale_details.date_sale} </td>
                        <td> R$ {item.sale_details.total_amount_in_cents/100} </td>
                        <td> {item.client_details.name} </td>
                        <td> {item.client_details.name} </td>
                        <td> {item.sale_details.payment_method} </td>
                        <td> {item.sale_details.subsidiary} </td>
                    </tr>);                   
                      }
                      )}
                </tbody>
            </table>
          </div>
      </div>
    );
  }  
}

export default ReportSection;
