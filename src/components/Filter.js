import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component{
    render(){
        return(
            <div className="main__search">
            <label htmlFor="input-filter">Busca tu correo</label>
            <input type="text" id="input-filter" onChange={this.props.handleOnChange} value={this.props.inputText}/>
            </div>
        );
    }
}

Filter.propTypes = {
    handleOnChange :PropTypes.func,
    inputText: PropTypes.string,
};
export default Filter;