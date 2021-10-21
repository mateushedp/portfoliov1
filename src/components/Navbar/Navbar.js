import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../locales/i18n';
import './Navbar.css';

function Navbar(){
	const history = useHistory();
	const location = useLocation();
	const { t } = useTranslation();
	
	return (
		<div className="Navbar">
			<p className={location.pathname === '/' ? 'Active' : 'Inactive'} onClick={() => history.push('/')}>{t('about')}</p>
			<p className={location.pathname === '/projects' ? 'Active' : 'Inactive'} onClick={() => history.push('/projects')}>{t('projects')}</p>
			<p className={location.pathname === '/contact' ? 'Active' : 'Inactive'} onClick={() => history.push('/contact')}>{t('contact')}</p>
		</div>
	);
}

export default Navbar;