import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Sign In screen', () => {
  render(<App />);
  const signInButton = screen.getByRole('button', { name: /sign in/i });
  expect(signInButton).toBeInTheDocument();
});
