import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Filter from './Filter';
import Status from './Status';
import DataList from './DataList';
import Footer from './Footer';


class Page extends React.Component {
    render() {
        const datos = this.props.datos
        return (
            <React.Fragment>
                <Header date = {this.props.date}></Header>
                <main className="main">
                    <Filter handleOnChange={this.props.handleOnChange} inputText= {this.props.inputText}/>
                    <Status results={this.props.results} />
                    <DataList datos={datos} inputText= {this.props.inputText}></DataList>
                </main>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

Page.propTypes = {
    date:PropTypes.string,
    datos: PropTypes.arrayOf(PropTypes.object),
    handleOnChange: PropTypes.func,
    inputText: PropTypes.string,
    results: PropTypes.number
};


export default Page;