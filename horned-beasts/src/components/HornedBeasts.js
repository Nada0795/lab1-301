import React from 'react';
class HornedBeasts extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>{this.props.title} :pizza:</h2>
                <p>{this.props.description} :notebook:</p>
                <img src={this.props.img} alt="" />
            </div>
        )
    }
}
export default HornedBeasts;