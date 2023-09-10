import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.div`
  height: 3rem; // Replace with your desired height value
  background-color: rgb(52, 52, 52);
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Separator = styled.div`
  border-top: 1px solid black;
  height: 5px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const FooterDescription = styled.div`
  margin-top: 10px;
  text-decoration: none;
  color: gray;

  @media (max-width: 1000px) {
    margin-top: 20px;
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-top: 20px;
  color: gray;

  @media (max-width: 1000px) {
    margin-top: 20px;
  }
`;

const MyLink = styled(Link)`
  text-decoration: none;
  margin-top: 10px;
`;

const Foot = () => {
  return (
    <FooterContainer>
      <FooterDescription>
        <p>Copyright © 2023 Acuitus-duo Consultancy</p>
      </FooterDescription>
      <Separator />
      <MyLink to="https://my-portfolio-sand-ten-81.vercel.app/">
        <FooterLink>
          <p>Developed BY: Erick Adikah</p>
        </FooterLink>
      </MyLink>
    </FooterContainer>
  );
};

export default Foot;