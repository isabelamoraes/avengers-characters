import React from 'react';
import { mocked } from 'ts-jest/utils';
import { act, render, waitFor } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';

import axios from 'axios';

import theme from '../../styles/theme';

import { ListCharacters } from '../../screens/ListCharacters';

const Providers: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

jest.mock('axios');

describe('ListCharacters Screen', () => {
    it('should be load the list of characters got from the request with the API', async () => {
        const axiosMocked = mocked(axios as any);
        axiosMocked.mockReturnValue({
            id: '1234',
            image: 'image_example',
            title: 'Title Example',
            description: 'Description Example',
            comics: {
                available: 12,
                items: {
                    name: 'Comics Example'
                }
            }
        });

        const { getByTestId } = render(
            <ListCharacters />,
            {
                wrapper: Providers
            }
        );

        await waitFor(() => {
            expect(getByTestId('flatListCharacters')).toBeDefined();
        });
    });
});