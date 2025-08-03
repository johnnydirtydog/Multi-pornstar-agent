import { render, screen, fireEvent } from '@testing-library/react';
import PersonaSelector from '../PersonaSelector';

describe('PersonaSelector', () => {
  const mockOnSelect = jest.fn();

  beforeEach(() => {
    mockOnSelect.mockClear();
  });

  test('renders all persona buttons', () => {
    render(<PersonaSelector onSelect={mockOnSelect} />);
    
    expect(screen.getByText('Jenna')).toBeInTheDocument();
    expect(screen.getByText('Riley')).toBeInTheDocument();
    expect(screen.getByText('Nina')).toBeInTheDocument();
    expect(screen.getByText('Farrah')).toBeInTheDocument();
    expect(screen.getByText('Lexi')).toBeInTheDocument();
    expect(screen.getByText('Coco')).toBeInTheDocument();
  });

  test('calls onSelect with correct persona name when button is clicked', () => {
    render(<PersonaSelector onSelect={mockOnSelect} />);
    
    const jennaButton = screen.getByText('Jenna');
    fireEvent.click(jennaButton);
    
    expect(mockOnSelect).toHaveBeenCalledWith('Jenna');
  });

  test('calls onSelect for different personas', () => {
    render(<PersonaSelector onSelect={mockOnSelect} />);
    
    fireEvent.click(screen.getByText('Riley'));
    expect(mockOnSelect).toHaveBeenCalledWith('Riley');
    
    fireEvent.click(screen.getByText('Nina'));
    expect(mockOnSelect).toHaveBeenCalledWith('Nina');
  });

  test('applies correct CSS classes to buttons', () => {
    render(<PersonaSelector onSelect={mockOnSelect} />);
    
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toHaveClass('px-4', 'py-2', 'bg-darkglass', 'text-glow', 'font-seduction', 'rounded-2xl', 'shadow-soft', 'backdrop-blur', 'hover:bg-velvet');
    });
  });

  test('renders correct number of persona buttons', () => {
    render(<PersonaSelector onSelect={mockOnSelect} />);
    
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(6);
  });
});