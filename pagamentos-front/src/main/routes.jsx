import React from 'react'

import { Router, Route, Redirect, hashHistory } from 'react-router'
import BillingCycle from '../billingCycle/BillingCycle'
import Dashboard from '../dashboard/Dashboard'

export default props => (
    <Router history={hashHistory} >
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)