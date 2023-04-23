import { render, screen, within } from '@testing-library/react';
import List from '../../components/primitives/List';

describe('List Component', () => {
  const sumsList = [
    { pA: 1, pB: 2, sum: 3 },
    { pA: 3, pB: 4, sum: 7 },
  ];

  it('Renders without crashing', () => {
    render(<List list={sumsList} />);
  });

  it('Renders the right number of list items', () => {
    render(<List list={sumsList} />);

    const itemsList = screen.getByRole('list', { name: /items/i });
    const { getAllByRole } = within(itemsList);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(2);
  });
});
