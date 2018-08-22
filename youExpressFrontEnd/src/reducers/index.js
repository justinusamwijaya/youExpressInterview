import { combineReducers, createStore } from 'redux'
import SelectionReducer from './selectionReducer.js'

export default createStore(combineReducers({
    selectedLibraryId: SelectionReducer
}))