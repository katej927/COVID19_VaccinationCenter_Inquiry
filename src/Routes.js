import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Sections/Main";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main} />
            </Switch>
        </Router>
    )
}

export default Routes;