import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';



class Home extends React.Component {
    constructor() {
        super();
    };

componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
      return (
          <h2> Ion Know what this part does but I'm keeping it </h2>
      )
     
  }

}

export default function render()
{
        return (
          <div>
            <div class="container">
                <div class="jumbotron" id="Jumbo">
                    <h2>Welcome to Xander Zone</h2>      
                </div>     
            </div>
            <div>
                <p>
                    This section will be where I explain what the point of this website is
                </p>
            </div>
         </div>
        );
}

