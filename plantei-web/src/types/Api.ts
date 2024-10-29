// api.ts
const ipApi: string = `54.81.243.249`;
const portApi: string = `3000`;

export const API_URLS = {
    getPlants: `http://${ipApi}:${portApi}/plants`,
    getPlant: `http://${ipApi}:${portApi}/plants/`,
    setPlant: `http://${ipApi}:${portApi}/plants`, 
};
