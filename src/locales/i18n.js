import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { TRANSLATIONS_EN } from './en/translations';
import { TRANSLATIONS_PT} from './pt/translations';

const language = window.navigator.userLanguage || window.navigator.language;
language.slice(0,2);

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			en: {
				translation: TRANSLATIONS_EN
			},
			pt: {
				translation: TRANSLATIONS_PT
			},
		}
	});
 
i18n.changeLanguage(language);