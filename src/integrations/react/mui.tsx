/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import { Button, Slider } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';

export const MUIButton = qwikify$(Button);
export const MUISlider = qwikify$(Slider, { eagerness: 'hover' });

export const CustomHeader = qwikify$(Header)
export const CustomFooter = qwikify$(Footer)
