import styled from "styled-components";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import { data } from "./data/data.js";
import { useEffect, useState } from "react";
import UserBox from "./Components/UserBox";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import WorkoutPage from "./Screens/WorkoutPage";
import NutritionPage from "./Screens/NutritionPage";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Heading>
                <Name></Name>
                <Steps>
                  <DirectionsWalkIcon className="icon" /> &nbsp; Steps
                </Steps>
                <Workout>
                  <FitnessCenterIcon className="icon" /> &nbsp; Workout
                </Workout>
                <Nutrition>
                  <RestaurantIcon className="icon" /> &nbsp; Nutrition
                </Nutrition>
                <Remind></Remind>
              </Heading>
              {data.map((data) => (
                <UserBox data={data} />
              ))}
            </Container>
          }
          exact
        ></Route>
        <Route path="/:userId/workout" element={<WorkoutPage />} exact></Route>
        <Route
          path="/:userId/nutrition"
          element={<NutritionPage />}
          exact
        ></Route>
      </Routes>
    </div>
  );
}

//CSS//

const Container = styled.div`
  display: flex;
  height: 85vh;
  flex-direction: column;
  margin: 2% 2%;
  padding-top: 1% !important;
  background-color: #101317;
  box-shadow: 2px 3px 42px rgba(0, 0, 0, 0.5);
  border-radius: 16px;

  @media screen and (max-width: 910px) {
    height: 150vh;
  }
  @media screen and (max-width: 810px) {
    height: 150vh;
  }
  @media screen and (max-width: 375px) {
    height: 150vh;
  }
`;

const Heading = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 15px;
  font-weight: 700;
  color: white;
  font-family: "Montserrat", sans-serif;
  margin: 2% 2%;
  .icon {
    font-size: 35px;
  }
  @media screen and (max-width: 910px) {
    display: none;
  }
  @media screen and (max-width: 810px) {
    display: none;
  }
  @media screen and (max-width: 375px) {
    display: none;
  }
`;

const Name = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  min-width: 35%;
`;

const Steps = styled.div`
  min-width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Workout = styled.div`
  min-width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Nutrition = styled.div`
  min-width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Remind = styled.div`
  min-width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center; ;
`;

export default App;
