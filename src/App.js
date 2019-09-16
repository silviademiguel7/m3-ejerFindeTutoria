import React from 'react';
import './assets/css/App.css';
//import PropTypes from 'prop-types';
//import bulk from './assets/data/bulk';
import Page from './components/Page';

//const datos = bulk.data;
const endpoint = "https://raw.githubusercontent.com/Adalab/m3-tutoria-2/master/assets/data/bulk.json";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date : "",
      datos : [],
      inputText : '',
     
      
    }
    this.handleOnChange=this.handleOnChange.bind(this);
  }

  componentDidMount() {
    fetch(endpoint)
    .then(response => response.json())
    .then(res=> {this.setState({datos: res.data ,
      date: res.date,
      }
      )})
  }
  handleOnChange(event){
   const inputValue = event.currentTarget.value;
  
   this.setState({inputText : inputValue });
    
  }

  render() {
    return (
      <div className="app">
        <Page datos={this.state.datos} handleOnChange={this.handleOnChange} inputText= {this.state.inputText} date={this.state.date}/>
      </div>
    );
  }
}

export default App;

