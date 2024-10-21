const fs = require('fs');
const path = require('path');

describe('Recipe Database', () => {
    let recipeData;

    beforeAll(() => {
        const dbPath = path.join(__dirname, 'recipeDatabase.json');
        const rawData = fs.readFileSync(dbPath);
        recipeData = JSON.parse(rawData);
    });

    it('should have a recipes array', () => {
        expect(Array.isArray(recipeData.recipes)).toBe(true);
    });

    it('should have at least one recipe', () => {
        expect(recipeData.recipes.length).toBeGreaterThan(0);
    });

    it('should have the correct structure for each recipe', () => {
        recipeData.recipes.forEach((recipe) => {
            expect(recipe).toHaveProperty('id');
            expect(recipe).toHaveProperty('name');
            expect(recipe).toHaveProperty('ingredients');
            expect(recipe).toHaveProperty('instructions');
            expect(Array.isArray(recipe.ingredients)).toBe(true);
            expect(typeof recipe.instructions).toBe('string');
        });
    });
});
