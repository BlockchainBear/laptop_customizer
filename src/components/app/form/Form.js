import React from 'react'
import Feature from './Feature'
import Features from './Features'



class Form extends React.Component {
    render () {
        const features = Object.keys(Features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <Feature
                    key={featureHash}
                    featureHash={featureHash}
                    feature={feature}
                    features={Features}
                    selected={this.props.selected}
                    USCurrencyFormat={this.props.USCurrencyFormat}
                    handleItemChange={this.props.handleItemChange}
                />
            )
        })
        return (
            <form className="main_form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}

export default Form 