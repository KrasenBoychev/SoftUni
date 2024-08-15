import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

import App from './App';

it('Should have heading', () => {
    render(<App />);

    const headingElement = screen.getByText('Unit Testing');
    expect(headingElement).toBeVisible();
});