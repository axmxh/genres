import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  margin: 30px;
`;

const NotFoundContainer = styled.div`
  font-size: 50px;
  color: tomato;
`;

const LinkContainer = styled(Link)`
  font-size: 20px;
  align-self: flex-start;
`;

const NotFound = () => {
  return (
    <Container>
      <LinkContainer to='/'>
        {`< go back`}
      </LinkContainer>
      <NotFoundContainer>Page Not Found :\</NotFoundContainer>
    </Container>
  );
};

export default NotFound;
