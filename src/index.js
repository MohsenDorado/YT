 import React from 'react';
 import  ReactDOM  from 'react-dom/client';
 import App from './App';
 import './index.css';
import { rootShouldForwardProp } from '@mui/material/styles/styled';

const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);