import { configureStore } from '@reduxjs/toolkit';

import rootReducer from 'core/store/reducer';
import middleware, { epicMiddleware } from 'core/store/middleware';
import rootEpic from 'core/store/epic';

const store = configureStore({
	reducer: rootReducer,
	middleware
});

epicMiddleware.run(rootEpic);

export default store;
