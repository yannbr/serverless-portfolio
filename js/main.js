import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    "alt": "example screenshot of a project involving chemistry",
    "src": "images/example1.png",
    "title": "Work Example #1"
  },
  {
    "alt": "example screenshot of a project involving chemistry",
    "src": "images/example2.png",
    "title": "Work Example #2"
  },
  {
    "alt": "example screenshot of a project involving chemistry",
    "src": "images/example3.png",
    "title": "Work Example #3"
  },
]

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));

console.log('here boooo');
