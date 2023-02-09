import { render, screen } from '@testing-library/react';
import App from '../App.js';
import Form from './Form.js';
import InputField from './InputField.js';

test('render input tags', () => {
    render(<App />);
    expect(screen.queryByPlaceholderText(/First Name/i)).toBeInTheDocument(); 
});
test('render input tags', () => {
    render(<App />);
    expect(screen.queryByPlaceholderText(/Last Name/i)).toBeInTheDocument(); 
});
test('render input tags', () => {
    render(<App />);
    expect(screen.queryByPlaceholderText(/Address/i)).toBeInTheDocument(); 
});
test('render input tags', () => {
    render(<App />);
    expect(screen.queryByPlaceholderText(/Email/i)).toBeInTheDocument(); 
});
test('render input tags', () => {
    render(<App />);
    expect(screen.queryByPlaceholderText(/Contact No/i)).toBeInTheDocument(); 
});
test('render input tags', () => {
    render(<App />);
    expect(screen.queryByPlaceholderText(/CNIC/i)).toBeInTheDocument(); 
});

