import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeasts extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      numOfLikes : 0
    };
  }

    incrementNumOfLikes = () => {
      this.setState({
        numOfLikes: this.state.numOfLikes + 1
      });
    }

    render() {
      console.log(this.props);
      return (
        <div>
          {/* <h2>{this.props.title} :pizza:</h2>
          <p>{this.props.description} :notebook:</p>
                <img src={this.props.img} alt="" /> */}

          <Card style={{ width: '18rem' }}>
            <Card.Img onClick={this.incrementNumOfLikes}
              variant="top" src={this.props.image_url} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
      number of likes ❤️:{this.state.numOfLikes}
              </Card.Text>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      );
    }
}
export default HornedBeasts;
