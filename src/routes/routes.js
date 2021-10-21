import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Routes(){
	return (
		<Router>
			<Switch>
				<Route path="/te">
					<p>oi</p>
				</Route>
				{/* <Route component="<p>thau</p>" path="/t" /> */}
			</Switch>
		</Router>
	);
}

export default Routes;