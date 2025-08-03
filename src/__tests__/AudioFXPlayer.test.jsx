import { render, screen, fireEvent } from '@testing-library/react';
import AudioFXPlayer from '../AudioFXPlayer';

describe('AudioFXPlayer', () => {
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    global.Audio.mockClear();
  });

  test('renders all sound effect buttons', () => {
    render(<AudioFXPlayer />);
    
    expect(screen.getByText('Moan')).toBeInTheDocument();
    expect(screen.getByText('Whisper')).toBeInTheDocument();
    expect(screen.getByText('Spank')).toBeInTheDocument();
    expect(screen.getByText('Climax')).toBeInTheDocument();
  });

  test('creates audio element with correct path when button is clicked', () => {
    render(<AudioFXPlayer />);
    
    const moanButton = screen.getByText('Moan');
    fireEvent.click(moanButton);
    
    expect(global.Audio).toHaveBeenCalledWith('/audio/moan.mp3');
  });

  test('calls play method on audio element when button is clicked', () => {
    const mockPlay = jest.fn();
    global.Audio = jest.fn().mockImplementation(() => ({
      play: mockPlay
    }));

    render(<AudioFXPlayer />);
    
    const whisperButton = screen.getByText('Whisper');
    fireEvent.click(whisperButton);
    
    expect(mockPlay).toHaveBeenCalled();
  });

  test('applies correct CSS classes to buttons', () => {
    render(<AudioFXPlayer />);
    
    const buttons = screen.getAllByRole('button');
    buttons.forEach(button => {
      expect(button).toHaveClass('bg-velvet', 'text-glow', 'p-3', 'rounded-xl', 'font-bold', 'hover:scale-105', 'transition');
    });
  });
});