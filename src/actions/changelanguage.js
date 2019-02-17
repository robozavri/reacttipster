import { CHANGE_LANGUAGE } from './types';

export const Changelanguage = langCode => {
    return { type: CHANGE_LANGUAGE, payload: langCode };
};
