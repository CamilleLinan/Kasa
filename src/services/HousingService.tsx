import { HousingType } from "../types/HousingType";

const fetchHousingData = async (): Promise<HousingType[]> => {
    try {
        const response = await fetch('/datas/housings.json');
        const allHousings = await response.json();

        return allHousings;
    } catch (error) {
        console.log('Erreur lors de la récupération des données :', error);
        throw error;
    }
};

const fetchHousingDataById = async ( id: string | undefined ): Promise<HousingType> => {
    try {
        const response = await fetch('/datas/housings.json');
        const data = await response.json();
        const housingById = data.find((housing: { id: string; }) => housing.id === id);
        
        return housingById;
    } catch (error) {
        console.log('Erreur lors de la récupération des données :', error);
        throw error;
    }
};
  
export default { fetchHousingData, fetchHousingDataById };