import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Aside from './components/Aside'
import Notification from './components/Notification'
import Order from './components/Order'
import MyProfile from './components/MyProfile'

export default function Profile() {
    let routerMatch = useRouteMatch();
    let { url } = routerMatch
    return (
        <main id="main-content">
            <div className="container--profile">
                <div className="profile-wrap">
                    <Aside />
                    <div className="content-main">
                        <Switch>
                            <Route path={`${url}`} exact component={MyProfile} />
                            {/* <Route path={`${url}/thong-bao`} exact component={Notification} />
                            <Route path={`${url}/don-hang`} exact component={Order} /> */}
                        </Switch>
                    </div>
                </div>
            </div>
        </main>
    )
}
