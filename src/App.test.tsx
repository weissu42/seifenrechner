import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import App from './App';

describe('Seifenrechner', () => {
  it('setzt den Seifennamen als Seitentitel', async() => {
    render(<App/>);

    const nameField = screen.getByDisplayValue('Seife') as HTMLInputElement;
    expect(nameField).toBeVisible();

    fireEvent.change(nameField, { target: { value: 'Test' } });

    await waitFor(() => expect(document.title).toBe('Test - Seifenrechner by weissu42'));
  });

  it('berechnet Seifenrezept korrekt', async() => {
    render(<App/>);

    const zutatField = screen.getByDisplayValue('Aprikosenkernöl') as HTMLInputElement;
    expect(zutatField).toBeInTheDocument();

    const anteilField = screen.getAllByDisplayValue(0)[0] as HTMLInputElement;
    expect(anteilField).toBeVisible();

    const button = screen.getAllByText('Hinzufügen')[0] as HTMLButtonElement;
    expect(button).toBeVisible();

    fireEvent.change(zutatField, { target: { value: 'Kokosöl' } });
    fireEvent.change(anteilField, { target: { value: 25 } });
    fireEvent.click(button);

    fireEvent.change(zutatField, { target: { value: 'Rapsöl' } });
    fireEvent.change(anteilField, { target: { value: 20 } });
    fireEvent.click(button);

    fireEvent.change(zutatField, { target: { value: 'Olivenöl' } });
    fireEvent.change(anteilField, { target: { value: 40 } });
    fireEvent.click(button);

    fireEvent.change(zutatField, { target: { value: 'Sheabutter' } });
    fireEvent.change(anteilField, { target: { value: 15 } });
    fireEvent.click(button);

    fireEvent.change(zutatField, { target: { value: 'Zitronensäure' } });
    fireEvent.change(anteilField, { target: { value: 5 } });
    fireEvent.click(button);

    const naoh = screen.getByText('NaOH: 47.95 g');
    expect(naoh).toBeVisible();
  });
});
