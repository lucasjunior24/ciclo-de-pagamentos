import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/DashboardReducers'

const rootReducer = combineReducers({
    dashboard: DashboardReducer
}) 

export default rootReducer