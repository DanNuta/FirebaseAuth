import React from 'react';
import CreateRoot from 'react-dom';
import App from './App';
import {AuthContext} from "../src/context/AuthContext";


CreateRoot.render(

  <AuthContext>
      <App />
  </AuthContext>,
  document.getElementById('root')
);


