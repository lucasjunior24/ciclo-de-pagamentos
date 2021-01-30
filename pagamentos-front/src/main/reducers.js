import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/DashboardReducers'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer
}) 

export default rootReducer