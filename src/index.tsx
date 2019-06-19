import * as React from 'react';

import {
    Environment,
    Route,
    SinglePageApp
} from "infrastructure-components";


export default (
    <SinglePageApp
        stackName = "{§PROJECT_NAME§}"
        buildPath = 'build'
        region='us-east-1'>

        "{§ENVIRONMENT_NAME§}"

        <Route
            path='/'
            name='Infrastructure-Components'
            render={()=><div>Hello Infrastructure-Components!</div>}
        />


    </SinglePageApp>);