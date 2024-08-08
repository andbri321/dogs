// import {
//   combineReducers,
//   configureStore,
//   getDefaultMiddleware,
// } from '@reduxjs/toolkit';

// const contador = () => 0;

// const middleware = [...getDefaultMiddleware()];
// const reducer = combineReducers({ contador });
// const store = configureStore({ reducer, middleware });

// export default store;

import {
    combineReducers,
    configureStore,
} from '@reduxjs/toolkit';
// import token from './token';
// import pexels from './pexels';
// import pexel_by_id from './pexel_by_id';

import photo from './photo';
import token from './token';
import user from './user';

const middleware =  (getDefaultMiddleware) => [...getDefaultMiddleware()];
// const reducer = combineReducers({token,pexels,pexel_by_id});
const reducer = combineReducers({ photo, token, user });
const store = configureStore({reducer,middleware});

export default store;