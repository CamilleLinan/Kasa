import { AboutContent } from "../types/AboutContent";

const fetchAboutContents = async (): Promise<AboutContent[]> => {
    try {
        const response = await fetch('/datas/about-contents.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Erreur lors de la récupération des données :', error);
        throw error;
    }
};
  
export default { fetchAboutContents };
