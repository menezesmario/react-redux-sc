import { combineReducers } from 'redux';

import course from './reducerCourse'
import stacks from './reducerCarShop'

export default combineReducers({
    course,
    stacks, 
})