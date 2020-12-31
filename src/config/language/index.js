import { createContext } from "react";
import es from './es.json';
import en from './en.json';

export const I18nContext = createContext();
export const defaultLanguage = 'en';

export default { es, en };