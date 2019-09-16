import React from 'react';
import PropTypes from 'prop-types';

class Status extends React.Component{
    render(){
        return(
            <p className="main__status">"Mostrando {this.props.results.length} registros"</p>
        );
    }

}

Status.propTypes = {
  
    results: PropTypes.array
};
export default Status;