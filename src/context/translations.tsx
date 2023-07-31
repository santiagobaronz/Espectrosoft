'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface ContextProps {
	selectedLanguage: string;
	setSelectedLanguage: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<ContextProps>({
	selectedLanguage: '',
	setSelectedLanguage: (): string => '',
})

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
	const [selectedLanguage, setSelectedLanguage] = useState('english');

	return (
		<GlobalContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => useContext(GlobalContext);