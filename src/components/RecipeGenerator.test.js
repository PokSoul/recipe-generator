import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RecipeGenerator from './RecipeGenerator';
import { getRecipeSuggestion } from '../api/recipeApi';

jest.mock('../api/recipeApi');

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

    it('generates a recipe suggestion', async () => {
        getRecipeSuggestion.mockResolvedValue('Salade de tomates');

        render(<RecipeGenerator />);
        const input = screen.getByPlaceholderText('Entrez un ingrédient');
        const addButton = screen.getByText('Ajouter');
        const generateButton = screen.getByText('Générer une recette');

        fireEvent.change(input, { target: { value: 'Tomate' } });
        fireEvent.click(addButton);
        fireEvent.click(generateButton);

        await waitFor(() => {
            expect(screen.getByText('Recette suggérée :')).toBeInTheDocument();
            // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
            expect(screen.getByText('Salade de tomates')).toBeInTheDocument();
        });
    });
});
