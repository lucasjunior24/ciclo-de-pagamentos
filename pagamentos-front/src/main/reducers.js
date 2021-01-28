import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/DashboardReducers'
import TabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer
}) 

export default rootReducer