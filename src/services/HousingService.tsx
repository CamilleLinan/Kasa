import { HousingType } from "../types/HousingType";

const fetchHousingDatas = async (): Promise<HousingType[]> => {
    try {
        const response = await fetch('/datas/housings.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Erreur lors de la récupération des données :', error);
        throw error;
    }
};
  
export default { fetchHousingDatas };