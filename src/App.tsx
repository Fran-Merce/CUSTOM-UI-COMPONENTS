import React from 'react';
import { Button } from './components/buttons';
import {  DefaultButton } from './components/buttons/Button';
import styled from 'styled-components';



  

const App = () => {
  return (
    <>
      <DefaultButton theme='dark' size='s'>
        click aqui
      </DefaultButton>
      <DefaultButton theme='dark' size='sm'>
        click aqui
      </DefaultButton>
      <DefaultButton theme='dark' size='m'>
        click aqui
      </DefaultButton>
      <DefaultButton theme='dark' size='l'>
        click aqui
      </DefaultButton>
      <DefaultButton theme='dark' size='xl'>
        click aqui
      </DefaultButton>
      <DefaultButton theme='dark' size='xxl'>
        click aqui
      </DefaultButton>
    </>
  );
};

export default App;
