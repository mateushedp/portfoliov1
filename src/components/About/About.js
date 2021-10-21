import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../locales/i18n';
import './About.css';


function About() {
	const { t } = useTranslation();
	return (
		<div className="Wrapper">
			<div className="About">
				<p className="Description">
					{t('description')}
				</p>
				<div>
					<div className="ResumeDiv">
						<img src="/github.png" className="Icon"></img>
						<a href="https://github.com/mateushedp">Github</a>
					</div>
					<div className="ResumeDiv">
						<img src="/linkedin.png" className="Icon"></img>
						<a href="https://www.linkedin.com/in/mateus-pacheco-02b675153/">LinkedIn</a>
					</div>
					<div className="ResumeDiv">
						<img src="/download.png" className="Icon"></img>
						<a href="/Resume.pdf" download="Resume Mateus Pacheco">{t('download_resume')}</a>
					</div>
				</div>
			</div>
		</div>
	);

}

export default About;