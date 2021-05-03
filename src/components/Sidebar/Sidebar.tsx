import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import './Sidebar.scss';

import report from '../../assets/icons svg/report.svg';
import sale from '../../assets/icons svg/sale.svg';

class Sidebar extends React.Component<any,any> {
  constructor(props=null){
    super(props);
    this.state = {
      isExpanded: false
    }; 

    this.openSidebar = this.openSidebar.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  render (): JSX.Element {
    return (
      <div className={'Sidebar ' + (this.state.isExpanded ? "expanded" : "collapsed")} data-testid="Sidebar" 
        onMouseOver={this.openSidebar} onMouseOut={this.closeSidebar}>
        <Link to='/sale'>
          <img className='icon' alt='sale' src={sale}/>
          <span className='icon-text' hidden={!this.state.isExpanded}>Fazer uma Venda</span>
        </Link>

        <Link to='/report'>
          <img className='icon' alt='report' src={report}/>
          <span className='icon-text' hidden={!this.state.isExpanded}>Histórico de Vendas</span>
        </Link>
      </div>
    );
  }

  openSidebar(): void{
    this.setState({isExpanded: true});
  }

  closeSidebar(): void{
    this.setState({isExpanded: false});
  }

}

export default Sidebar;
