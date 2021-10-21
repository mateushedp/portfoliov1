import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { useTranslation } from 'react-i18next';
import './locales/i18n';
import './App.css';

function App() {
	const { t } = useTranslation();
	
	return (
		<div>
			<Router>
				<main>
					<div className="Header">
						<div className="IntroBox">
							<h1>Mateus Pacheco</h1>
							<h2>{t('job')}</h2>
						</div>
						<Navbar />
					</div>
			
					<Switch>
						<Route component={Projects} path="/projects" />
						<Route component={Contact} path="/contact" />
						<Route component={About} path="/"/>
					</Switch>
				</main>
			</Router>
		</div>
	);
}

export default App;
