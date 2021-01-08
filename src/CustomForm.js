import React from 'react';
import FeaturesObject from './FeaturesObject';
import Features from './Features';



class CustomForm extends React.Component{
    render(){
        return(
            <form className="main__form">
            <Features selected={this.props.selected} 
            updateFeature={this.props.updateFeature} 
            USCurrencyFormat={this.props.USCurrencyFormat}
            FeaturesObject={FeaturesObject}
            /> 
            </form>
            
        )
    }
}

export default CustomForm;