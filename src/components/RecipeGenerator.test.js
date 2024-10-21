import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RecipeGenerator from './RecipeGenerator';
import { getRecipeSuggestion } from '../services/recipeService';

jest.mock('../services/recipeService');

describe('RecipeGenerator', () => {
    it('renders the component', () => {
        render(<RecipeGenerator />);
        expect(screen.getByText('Générateur de Recettes')).toBeInTheDocument();
    });

    it('adds ingredients to the list', () => {
        render(<RecipeGenerator />);
        const input = screen.getByPlaceholderText('Entrez un ingrédient');
        const addButton = screen.getByText('Ajouter');

        fireEvent.change(input, { target: { value: 'Tomate' } });
        fireEvent.click(addButton);

        expect(screen.getByText('Tomate')).toBeInTheDocument();
    });

    it('generates a recipe suggestion', () => {
        getRecipeSuggestion.mockReturnValue(
            'Salade de tomates\n\nIngrédients: tomate, oignon\n\nInstructions: ...'
        );

        render(<RecipeGenerator />);
        const input = screen.getByPlaceholderText('Entrez un ingrédient');
        const addButton = screen.getByText('Ajouter');
        const generateButton = screen.getByText('Générer une recette');

        fireEvent.change(input, { target: { value: 'Tomate' } });
        fireEvent.click(addButton);
        fireEvent.click(generateButton);

        expect(screen.getByText('Recette suggérée :')).toBeInTheDocument();
        expect(screen.getByText(/Salade de tomates/)).toBeInTheDocument();
    });
});
