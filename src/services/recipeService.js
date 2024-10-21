import recipeData from '../data/recipeDatabase.json';

export const getRecipeSuggestion = (ingredients) => {
    const lowercaseIngredients = ingredients.map((ing) => ing.toLowerCase());

    const matchingRecipes = recipeData.recipes.filter((recipe) =>
        lowercaseIngredients.every((ing) =>
            recipe.ingredients.map((i) => i.toLowerCase()).includes(ing)
        )
    );

    if (matchingRecipes.length === 0) {
        return 'Désolé, aucune recette ne correspond à ces ingrédients.';
    }

    const randomRecipe = matchingRecipes[Math.floor(Math.random() * matchingRecipes.length)];
    return `${randomRecipe.name}\n\nIngrédients:\n${randomRecipe.ingredients.join(', ')}\n\nInstructions:\n${randomRecipe.instructions}`;
};
