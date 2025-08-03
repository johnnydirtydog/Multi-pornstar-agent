import { render, screen } from '@testing-library/react';
import LoadingScreen from '../LoadingScreen';

describe('LoadingScreen', () => {
  test('renders the loading text', () => {
    render(<LoadingScreen />);
    
    expect(screen.getByText('Summoning Desire...')).toBeInTheDocument();
  });

  test('applies correct CSS classes', () => {
    render(<LoadingScreen />);
    
    const loadingElement = screen.getByText('Summoning Desire...');
    expect(loadingElement).toHaveClass('flex', 'items-center', 'justify-center', 'h-screen', 'bg-obsidian', 'text-blush', 'font-seduction', 'text-4xl', 'animate-pulse');
  });

  test('component renders without crashing', () => {
    const { container } = render(<LoadingScreen />);
    expect(container.firstChild).toBeInTheDocument();
  });
});