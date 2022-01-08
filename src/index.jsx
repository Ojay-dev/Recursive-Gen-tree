import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const story = {
  _id: '1',
  parent: null,
  text: 'Genesis block',
  landingPoint: '',
  children: [
    {
      _id: '11',
      parent: '1',
      text: 'First Gen, Firs Child',
      buttonText: '',
      children: [
        {
          _id: '111',
          parent: '11',
          text: 'Second Gen, First Child'
        },
        {
          _id: '112',
          parent: '11',
          text: 'Second Gen, Second Child'
        },
        {
          _id: '113',
          parent: '11',
          text: 'Second Gen, Third Child'
        }
      ]
    },
    {
      _id: '12',
      parent: '1',
      text: 'First Gen, Second Child',
      children: [
        {
          _id: '121',
          parent: '12',
          text: 'Second Gen, Fourth Child',
          children: [
            {
              _id: '1211',
              parent: '121',
              text: 'Third Gen, First Child'
            },
            {
              _id: '1212',
              parent: '121',
              text: 'Third Gen, Second Child'
            },
            {
              _id: '1213',
              parent: '121',
              text: 'Third Gen, Third Child'
            },
            {
              _id: '1214',
              parent: '121',
              text: 'Third Gen, Fourth Child'
            },
            {
              _id: '1215',
              parent: '121',
              text: 'Third Gen, Fifth Child'
            },
            {
              _id: '1216',
              parent: '121',
              text: 'Third Gen, Sixth Child'
            }
          ]
        },
        {
          _id: '122',
          parent: '12',
          text: 'Second Gen, Fifth Child'
        },
        {
          _id: '123',
          parent: '12',
          text: 'Second Gen, Sixth Child'
        }
      ]
    },
    {
      _id: '13',
      parent: '1',
      text: 'First Gen, Third Child',
      children: [
        {
          _id: '131',
          parent: '13',
          text: 'Second Gen, Seventh Child'
        },
        {
          _id: '132',
          parent: '13',
          text: 'Second Gen, Eight Child'
        },
        {
          _id: '133',
          parent: '13',
          text: 'Second Gen, Nineght Child'
        },
        {
          _id: '134',
          parent: '13',
          text: 'Second Gen, Tenth Child'
        },
        {
          _id: '135',
          parent: '13',
          text: 'Second Gen, Eleventh Child'
        },
        {
          _id: '136',
          parent: '13',
          text: 'Second Gen, Twelveth Child'
        }
      ]
    }
  ]
};

ReactDOM.render(
  <React.StrictMode>
    <App blocks={[story]} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
