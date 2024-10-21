import axios from 'axios';

// Remplacez cette URL par l'URL de votre API réelle
const API_URL = 'https://api.example.com/recipes';

export const getRecipeSuggestion = async (ingredients) => {
    try {
        const response = await axios.post(API_URL, { ingredients });
        return response.data.recipe;
    } catch (error) {
        console.error('Error fetching recipe suggestion:', error);
        throw new Error('Failed to get recipe suggestion');
    }
};
