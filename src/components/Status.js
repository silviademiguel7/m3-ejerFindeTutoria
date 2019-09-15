import React from 'react';
import PropTypes from 'prop-types';

class Status extends React.Component{
    render(){
        return(
            <p className="main__status">"Mostrando {this.props.results} registros"</p>
        );
    }

}

Status.propTypes = {
  
    results: PropTypes.number
};
export default Status;