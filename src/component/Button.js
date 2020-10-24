import React, {Component} from 'react'; 

class Button extends Component{

    render(){
        return (
            <div>
                <button className={`Calci-buttons btn-${this.props.flt} width-${this.props.wid} typ-${this.props.typ}`} onClick={() => this.props.action(this.props.symbol)}>{this.props.symbol}</button>
            </div>
        )
    }

}
export default Button;