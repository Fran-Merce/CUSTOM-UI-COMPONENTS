import { ButtonHTMLAttributes } from "react";

type size = 's' | 'sm' | 'm' | 'l' | 'xl' | 'xxl';

export interface customProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: size;
  color?: string;
  theme: 'dark' | 'light';
}

export interface ButtonProps {
  color?: string;
  size?: size;
  children: React.ReactNode | string | number | React.ReactNode[];
}

export const sizeButton = {
  s: '1rem',
  sm: '1.5rem',
  m: '2rem',
  l: '3rem',
  xl: '4.5rem',
  xxl: '7rem',
};
export const fontButton = {
  s: '.8rem',
  sm: '1rem',
  m: '1.2rem',
  l: '1.5rem',
  xl: '1.7rem',
  xxl: '2rem',
};

