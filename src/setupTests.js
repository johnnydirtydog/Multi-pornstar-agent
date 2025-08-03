import '@testing-library/jest-dom';

// Mock audio for tests since Audio constructor isn't available in test environment
global.Audio = jest.fn().mockImplementation(() => ({
  play: jest.fn()
}));