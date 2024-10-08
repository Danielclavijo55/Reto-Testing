import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Like from '../Like';

describe('Like Component', () => {
  test('muestra "Likes: 0" por defecto', () => {
    render(<Like />);
    expect(screen.getByText('Likes: 0')).toBeInTheDocument();
  });

  test('incrementa el número de likes cuando se hace clic en el botón Like', () => {
    render(<Like />);
    const likeButton = screen.getByText('Like');
    fireEvent.click(likeButton);
    expect(screen.getByText('Likes: 1')).toBeInTheDocument();
  });

  test('decrementa el número de likes cuando se hace clic en el botón Dislike', () => {
    render(<Like />);
    const dislikeButton = screen.getByText('Dislike');
    fireEvent.click(dislikeButton);
    expect(screen.getByText('Likes: -1')).toBeInTheDocument();
  });
});