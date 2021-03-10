import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Home } from './Home'

import store from 'core/store/store.config';


function App() {
	return (
		<Provider store={store}>
			<div>
				<Home />
			</div>
		</Provider>
	);
}

export default App;
