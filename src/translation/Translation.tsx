// Translation.tsx
import React from 'react';
import { useGlobalContext } from '../context/translations';
import { translations } from './translations';

interface TranslationProps {
	section: string;
	translationKey: string;
}

const Translation: React.FC<TranslationProps> = ({ section, translationKey }) => {
	const selectedLanguage = useGlobalContext().selectedLanguage;
	//@ts-ignore
	const translatedText = translations[section][translationKey][selectedLanguage]
	return <>{translatedText}</>;
};

export default Translation;