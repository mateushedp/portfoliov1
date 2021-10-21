import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../locales/i18n';
import './Projects.css';

function Projects() {
	const { t } = useTranslation();
	return (
		<div className="Wrapper" style={{flexWrap: 'wrap'}}>
			<h2>{t('work')}</h2>
			<div className="project-listing">
				<img className="project-listing-image" src="https://i.pinimg.com/564x/24/73/c0/2473c02e2ac93f617a28b2b5058bb41d.jpg" />
				<div className="project-listing-description">
					<p className="project-listing-description-title">Título do projeto</p>
					<p className="project-listing-description-text">
            Descrição do projeto. Objetivo, cliente, tecnologias utilizadas. Talvez mais algum blablabla.
					</p>
					<div className="project-listing-description-links">
						<div className="ResumeDiv">
							<img src="/github.svg" className="Icon"></img>
							<a href="http://www.github.com/mateushedp">{t('open_git')}</a>
						</div>
						<div className="ResumeDiv">
							<img src="/external-link.svg" className="Icon"></img>
							<a href="http://www.github.com/mateushedp">{t('open_project')}</a>
						</div>
					</div>
				</div>
			</div>

			<div className="project-listing">
				<img className="project-listing-image" src="https://i.pinimg.com/564x/24/73/c0/2473c02e2ac93f617a28b2b5058bb41d.jpg" />
				<div className="project-listing-description">
					<p className="project-listing-description-title">Título do projeto</p>
					<p className="project-listing-description-text">
            Descrição do projeto. Objetivo, cliente, tecnologias utilizadas. Talvez mais algum blablabla.
					</p>
					<div className="project-listing-description-links">
						<div className="ResumeDiv">
							<img src="/github.svg" className="Icon"></img>
							<a href="http://www.github.com/mateushedp">{t('open_git')}</a>
						</div>
						<div className="ResumeDiv">
							<img src="/external-link.svg" className="Icon"></img>
							<a href="http://www.github.com/mateushedp">{t('open_project')}</a>
						</div>
					</div>
				</div>
			</div>

		</div>

	);
}

export default Projects;