import React from 'react'
import { Route, Switch } from "react-router-dom";

import CommonLayout from '../layout/CommonLayout'
import Home from './Home'
import AboutUs from './AboutUs'
import Equipment from './Equipment'
import Service from './Service'
import Contacts from './Contacts'

const App = () => {
    return (
        <CommonLayout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/aboutUs" component={AboutUs} />
                <Route path="/equipment" component={Equipment} />
                <Route path="/service" component={Service} />
                <Route path="/contacts" component={Contacts} />
            </Switch>
        </CommonLayout>
    )
}

export default App
