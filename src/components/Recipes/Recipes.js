import React from 'react'
import { Link } from 'react-router-dom';
import './Recipes.css';


class Recipes extends React.Component {
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
          <h2>Recipes Page</h2>
        );
}
