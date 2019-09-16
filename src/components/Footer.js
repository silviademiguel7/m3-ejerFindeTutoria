import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.getHour = this.getHour.bind(this);
        this.state={
            result : ''
        }
    }
    componentDidMount() {
        setInterval(()=> this.getHour(), 1000);
    }
    getHour() {
        const moment = new Date();
        const hours = moment.getHours();
        const minuts = moment.getMinutes();
        const seconds = moment.getSeconds();
        this.setState({result : hours + ":" + minuts + ":" + seconds});
    }
    render() {
        return (
            <footer className="footer">
                <p className="footer__title">loh()</p>
                <p className="footer__clock">{this.state.result}</p>
            </footer>
        );
    }
}

export default Footer;