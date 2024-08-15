import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Counter from './Counter';

describe('Counter Component', () => {
     it('Should have zero value initially', () => {
        render(<Counter />);

        const countElement = screen.getByText('0');

        expect(countElement).toBeVisible();
     }); 

     it('Should increment count when clicking the button', async () => {
        render(<Counter />);

        await userEvent.click(screen.getByText('Increment'));

        const countElement = screen.getByText('1');

        expect(countElement).toBeVisible;
     });
});