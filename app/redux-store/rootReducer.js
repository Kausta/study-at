/**
 * @format
 * @flow
 */

import { reducer as formReducer } from 'redux-form'
import authReducer from 'modules/auth/reducer'
import homeReducer from 'modules/home/reducer'

// Combine all the reducers
const rootReducer = {
  auth: authReducer,
  home: homeReducer,
  form: formReducer,
}

export default rootReducer
