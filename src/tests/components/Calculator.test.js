import { render, screen, fireEvent, within } from '@testing-library/react';
import Calculator from '../../components/Calculator';

describe('Calculator Component', () => {
  it('Renders without crashing', () => {
    render(<Calculator />);
  });

  it('Renders the right number of list items', () => {
    render(<Calculator />);

    const input = screen.getByLabelText('input');
    const button = screen.getByRole('button');

    fireEvent.click(button);
    fireEvent.change(input, { target: { value: '1,2,3' } });

    const itemsList = screen.getByRole('list', { name: /items/i });
    const { getAllByRole } = within(itemsList);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(1);
  });
});
