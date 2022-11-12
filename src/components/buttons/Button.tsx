
import styled from 'styled-components';
import { ButtonProps, customProps, fontButton, sizeButton } from './types';

export const DefaultButton= (props: customProps) => {
  const themeButton = props.theme || 'light';
  const rest = { ...props, theme: themeButton };
  return <Button {...rest}>{props.children}</Button>;
};

export const Button = styled.button<ButtonProps>`
  background-color: ${props => (props.theme === 'dark' ? 'black' : 'white')};
  color: #fff;
  font-size: ${props => fontButton[props.size || 'sm']};
  min-width: ${props => sizeButton[props.size || 'xxl']};
  color: ${props => (props.theme === 'dark' ? '#fff' : '#000')};
  max-width: max-content;
  padding: 0.5rem 1.3rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${props => (props.theme === 'dark' ? '#fff' : '#000')};
    color: ${props => (props.theme === 'dark' ? '#000' : '#fff')};
  }
 
  &:focus{
    transform: scale(.95);
  }
`;
