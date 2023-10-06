import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  
    const facebook = getByTestId('instagram')
    const instagram = getByTestId('whatsapp')
    const whatsapp = getByTestId('facebook')
  
    expect(facebook).toBeInTheDocument();
    expect(instagram).toBeInTheDocument();
    expect(whatsapp).toBeInTheDocument();
  })
});