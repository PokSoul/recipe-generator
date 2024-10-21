import { getRecipeSuggestion } from './recipeService';

describe('Recipe Service', () => {
    it('should return a recipe when given matching ingredients', () => {
        const result = getRecipeSuggestion(['tomate', 'oignon']);
        expect(result).toContain('Salade de tomates');
    });

    it('should return an error message when no recipe matches', () => {
        const result = getRecipeSuggestion(['banane', 'chocolat']);
        expect(result).toBe('Désolé, aucune recette ne correspond à ces ingrédients.');
    });

    it('should be case insensitive', () => {
        const result = getRecipeSuggestion(['TOMATE', 'Oignon']);
        expect(result).toContain('Salade de tomates');
    });
});
