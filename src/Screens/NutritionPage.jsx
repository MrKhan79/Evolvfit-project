import React from 'react'
import styled from 'styled-components';


const NutritionPage = () => {
  return (
    <Container>
      Nutrition Page
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  font-size: 50px;
  color: white;
  height: 85vh;
  flex-direction: column;
  margin: 2% 2%;
  padding-top: 1% !important;
  justify-content: center;
  align-items: center;
  background-color: #101317;
  box-shadow: 2px 3px 42px rgba(0, 0, 0, 0.5);
  border-radius: 16px;
`;

export default NutritionPage
