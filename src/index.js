import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { LocaleProvider } from 'antd';
// import enUS from 'antd/lib/locale-provider/en_US';

import "./index.css";

import store from "./store";

import App from "./App";

ReactDOM.render(
	// <LocaleProvider locale={enUS}>
	<Provider store={ store }>
		<App />
	</Provider>,
	// </LocaleProvider> ,
	document.getElementById( 'root' )
);
