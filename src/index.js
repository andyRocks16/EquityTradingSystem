
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { configureStore, MainApp } from './store/configStore';
import { Provider } from 'react-redux';
// import './styles.scss';
// import 'font-awesome/css/font-awesome.css';
// import 'flexboxgrid/css/flexboxgrid.css';
import AppProvider from './App.provider';

injectTapEventPlugin();


render(
   <AppProvider/>, document.getElementById('app')
);