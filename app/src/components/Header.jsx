import React from 'react';
import styled from 'styled-components';
import { Title } from '../theme';

let Header = (props) => {
  return(
    <header className={props.className}>
      <img src="/logo.svg" alt="Logo" height="45"></img>
      <Title>TikTak</Title>
    </header>
  )
}

export default styled(Header)`
  text-align:center;
  padding:1em 0;
  img{
    vertical-align: middle;
  }
`;