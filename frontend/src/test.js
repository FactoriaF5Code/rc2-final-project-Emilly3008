import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Proteinas from './Proteinas';

describe('App component', () => {
  test('renders navigation elements', () => {
    render(<App />);

    expect(screen.getByText('Productos')).toBeInTheDocument();
    expect(screen.getByAltText('GymElite')).toBeInTheDocument();
    expect(screen.getByTestId('basket-icon')).toBeInTheDocument();
  });

  test('opens registration modal when "Crear cuenta" button is clicked', () => {
    render(<App />);
    
   
    expect(screen.queryByText('Crear cuenta')).not.toBeInTheDocument();

 
    fireEvent.click(screen.getByText('Crear cuenta'));


    expect(screen.getByText('Crear cuenta')).toBeInTheDocument();
  });

  test('registers a user when registration form is submitted', () => {
    render(<App />);
    
   
    fireEvent.click(screen.getByText('Crear cuenta'));

  
    fireEvent.change(screen.getByLabelText('Nombre de usuario:'), { target: { value: 'testUser' } });
    fireEvent.change(screen.getByLabelText('Correo electrónico:'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Contraseña:'), { target: { value: 'testPassword' } });
    fireEvent.click(screen.getByText('Aceptar'));

    
    expect(screen.queryByText('Crear cuenta')).not.toBeInTheDocument();
   
  });

});


describe('Proteinas component', () => {
  test('renders heading and product images with correct alt text', () => {
    render(
      <Router>
        <Proteinas />
      </Router>
    );

    
    expect(screen.getByText('Proteínas')).toBeInTheDocument();

    const cerealMilkProductImg = screen.getByAltText('Proteina - Sabor cereal milk');
    const richChocolateProductImg = screen.getByAltText('Proteina - Sabor rich chocolate');
    expect(cerealMilkProductImg).toBeInTheDocument();
    expect(richChocolateProductImg).toBeInTheDocument();
  });

  test('renders product prices', () => {
    render(
      <Router>
        <Proteinas />
      </Router>
    );

   
    const cerealMilkProductPrice = screen.getByText('24.99€');
    const richChocolateProductPrice = screen.getByText('19.99€');
    expect(cerealMilkProductPrice).toBeInTheDocument();
    expect(richChocolateProductPrice).toBeInTheDocument();
  });

});
