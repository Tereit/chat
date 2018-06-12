import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// TODO: error thrown by this is something to do with firebase auth, investigate issue further
xit('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
