import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { fontSize } from "@mui/system";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import EventRepeatOutlinedIcon from "@mui/icons-material/EventRepeatOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { PieChart } from "react-minimal-pie-chart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { NavLink } from "react-router-dom";
import PriorityHighOutlinedIcon from "@mui/icons-material/PriorityHighOutlined";
import ProgressBar from "@ramonak/react-progress-bar";

const UserBox = ({ data }) => {
  const link = data.userId + "/workout";
  const link2 = data.userId + "/nutrition";

  const initialSteps = data.stepsWalked;
  const initialCals = data.calorieIntake.amount;

  const [steps, setSteps] = useState(initialSteps);
  const [cals, setCals] = useState(initialCals);
  const [sameDate, setSameDate] = useState(false);

  useEffect(() => {
    if (data.scheduledDate == data.performedDate) {
      setSameDate(true);
    }
  }, []);

  //To add walked steps
  const addSteps = () => {
    if (steps < 4500) {
      const newSteps = steps + 500;
      setSteps(newSteps);
    }
  };

  //To remove walked steps
  const remSteps = () => {
    if (steps >= 500) {
      const newSteps = steps - 500;
      setSteps(newSteps);
    }
  };

  //To add calories
  const addCals = () => {
    if (cals < 2500) {
      const newCals = cals + 100;
      setCals(newCals);
    }
  };

  //To remove calories
  const remCals = () => {
    if (cals > 100) {
      const newCals = cals - 100;
      setCals(newCals);
    }
  };

  return (
    <Main>
      <Name>
        <Avatar
          alt={data.name}
          src={data.image}
          sx={{ width: 46, height: 46 }}
        />
        <Info>
          <div className="name">{data.name}</div>
          <div className="email">{data.email}</div>
        </Info>
      </Name>
      <Steps>
        <div style={{ width: 65, height: 65 }}>
          <CircularProgressbarWithChildren
            value={steps}
            maxValue={data.stepsTarget}
            styles={{
              // Customize the root svg element
              root: {},
              // Customize the path, i.e. the "completed progress"
              path: {
                // Path color
                stroke: `#90ee90`,
              },
            }}
          >
            {steps}
            <div
              style={{
                fontSize: 10,
                fontWeight: 3,
                marginTop: -3,
                color: "#BDBCBE",
              }}
            >
              Walked
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div
          className="stepsCount"
          style={{ marginLeft: "20px", fontSize: "16px" }}
        >
          <div className="upArrow" onClick={addSteps}>
            <AddIcon style={{ fontSize: "14px" }} />
          </div>
          4.5k
          <span style={{ fontWeight: 10, fontSize: "11px", color: "#BDBCBE" }}>
            target
          </span>
          <div className="upArrow" onClick={remSteps}>
            <RemoveIcon style={{ fontSize: "14px" }} />
          </div>
        </div>
      </Steps>
      <Workout>
        <div className="dateRes" style={{ fontSize: "15px", fontWeight: 20 }}>
          <div
            className="date"
            style={{ padding: "1px 3px", borderRadius: "2px" }}
          >
            <HowToRegOutlinedIcon style={{ fontSize: "28px" }} />
            &nbsp;{data.performedDate}
          </div>
          <div
            className="date"
            style={{
              backgroundColor: sameDate ? "#CC3838" : "none",
              padding: "1px 3px",
              borderRadius: "4px",
            }}
          >
            <EventRepeatOutlinedIcon style={{ fontSize: "28px" }} />
            &nbsp;{data.scheduledDate}
          </div>
        </div>
        <NavLink to={link}>
          {data.feedback ? (
            <div className="arrow" style={{ backgroundColor: "#CC3838" }}>
              <PriorityHighOutlinedIcon />
            </div>
          ) : (
            <div className="arrow">
              <ArrowForwardIosIcon style={{ fontSize: "16px" }} />
            </div>
          )}
        </NavLink>
      </Workout>
      <Nutrition>
        <div style={{ width: 65, height: 65 }}>
          <PieChart
            className="pieChart"
            data={[
              {
                title: "Protien",
                value: data.calorieIntake.proteinConsumed,
                color: "#03C7FC",
              },
              {
                title: "Fats",
                value: data.calorieIntake.fatConsumed,
                color: "#F45C84",
              },
              {
                title: "Carbs",
                value: data.calorieIntake.carbConsumed,
                color: "#F5C90F",
              },
            ]}
            lineWidth={20}
            label={(labelRenderProps: LabelRenderProps) => cals + " cal"}
            labelStyle={{
              fontSize: "16px",
              fill: "white",
              width: "10px",
              fontWeight: 10,
              wordBreak: "break-all",
            }}
            labelPosition={0}
          ></PieChart>
          <div className="hoverCard">
            <Progress>
              <div className="progressHead">
                <span>Protien</span>
                <span style={{ paddingRight: "0px !important" }}>70gm</span>
              </div>
              <ProgressBar
                completed={data.calorieIntake.proteinConsumed}
                maxCompleted={70}
                bgColor="#03C7FC"
                height="10px"
                labelSize="8px"
                width="230px"
              />
            </Progress>
            <Progress>
              <div className="progressHead">
                <span>Fat</span>
                <span>70gm</span>
              </div>
              <ProgressBar
                completed={data.calorieIntake.fatConsumed}
                maxCompleted={70}
                bgColor="#F45C84"
                height="10px"
                labelSize="8px"
                width="230px"
              />
            </Progress>
            <Progress>
              <div className="progressHead">
                <span>Carbs</span>
                <span>70gm</span>
              </div>
              <ProgressBar
                completed={data.calorieIntake.carbsConsumed}
                maxCompleted={70}
                bgColor="#F5C90F"
                height="10px"
                labelSize="8px"
                width="230px"
              />
            </Progress>
          </div>
        </div>
        <div
          className="stepsCount"
          style={{ marginLeft: "20px", fontSize: "16px" }}
        >
          <div className="upArrow" onClick={addCals}>
            <AddIcon style={{ fontSize: "14px" }} />
          </div>
          2.5k
          <span style={{ fontWeight: 10, fontSize: "11px", color: "#BDBCBE" }}>
            target
          </span>
          <div className="upArrow" onClick={remCals}>
            <RemoveIcon style={{ fontSize: "14px" }} />
          </div>
        </div>
        <NavLink to={link2}>
          <div className="arrow">
            <ArrowForwardIosIcon style={{ fontSize: "16px" }} />
          </div>
        </NavLink>
      </Nutrition>
      <Remind>
        <div className="bellIcon">
          <NotificationsNoneOutlinedIcon style={{ fontSize: "28px" }} />
        </div>
      </Remind>
    </Main>
  );
};

//CSS//

const Name = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  min-width: 35%;

  @media screen and (max-width: 910px) {
    padding-bottom: 20px;
  }
  @media screen and (max-width: 810px) {
    padding-bottom: 20px;
  }
  @media screen and (max-width: 375px) {
    padding-bottom: 20px;
  }
`;

const Steps = styled.div`
  min-width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  .upArrow {
    background-color: #101317;
    width: 30px;
    height: 18px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 4px 2px;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.1);
      transition: all 0.5s;
    }
  }

  .stepsCount {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 910px) {
      flex-direction: row;
      width: 50vw;
    }
    @media screen and (max-width: 810px) {
      flex-direction: row;

      width: 50vw;
    }
    @media screen and (max-width: 375px) {
      flex-direction: row;

      width: inherit;
    }
  }

  @media screen and (max-width: 910px) {
    flex-direction: row;
  }
  @media screen and (max-width: 810px) {
    flex-direction: row;
  }
  @media screen and (max-width: 375px) {
    flex-direction: row;
  }
`;

const Workout = styled.div`
  min-width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  .date {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .dateRes {
    display: flex;
    flex-direction: column;
    margin: 40px 0;
    @media screen and (max-width: 910px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      align-content: space-around;
      margin: 20px 0;

      width: 55.5vw;
    }
    @media screen and (max-width: 810px) {
      flex-direction: row;
      justify-content: space-around;
      align-content: space-around;
      align-items: center;
      margin: 20px 0;

      width: 55.5vw;
    }
    @media screen and (max-width: 375px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      align-content: space-around;
      margin: 20px 0;

      width: 55.5vw;
    }
  }

  .arrow {
    text-decoration: none !important;
    color: white !important;
    background-color: #101317;
    width: 30px;
    height: 65px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.1);
      transition: all 0.5s;
    }
  }
`;

const Nutrition = styled.div`
  min-width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  .hoverCard {
    display: none;
    z-index: 4;
    transition: all 0.5s;
  }
  transition: all 0.5s;

  .pieChart {
    transition: all 0.5s;

    &:hover {
      transform: scale(1.2);
      transition: all 0.5s;
      z-index: 5 !important;
    }
  }

  .upArrow {
    background-color: #101317;
    width: 30px;
    height: 18px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 4px 2px;
    transition: all 0.5s;
    flex-direction: column;

    &:hover {
      transform: scale(1.1);
      transition: all 0.5s;
    }
  }
  .arrow {
    background-color: #101317;
    width: 30px;
    height: 65px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    transition: all 0.5s;

    cursor: pointer;
    text-decoration: none !important;
    color: white !important;
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s;
    }
  }

  .progressBar {
  }

  &:hover {
    transition: all 0.5s;

    .hoverCard {
      transition: all 0.5s;
      display: flex;
      background-color: red;
      color: white;
      z-index: 4;
      position: relative;
      flex-direction: column;
      width: 250px;
      height: 180px;
      right: 90px;
      padding-top: 1% !important;
      background-color: #333b44;
      justify-content: center;
      align-items: center;
      box-shadow: 2px 3px 42px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      opacity: 0.9;

      @media screen and (max-width: 910px) {
        left: 0;
        right: 0;
      }
      @media screen and (max-width: 810px) {
        left: 0;
        right: 0;
      }
      @media screen and (max-width: 375px) {
        left: 0;
        right: 0;
      }
    }
  }

  .stepsCount {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 910px) {
      flex-direction: row;
      align-items: center;
      width: inherit;
    }
    @media screen and (max-width: 810px) {
      flex-direction: row;
      align-items: center;
    }
    @media screen and (max-width: 375px) {
      flex-direction: row;
      align-items: center;
    }
  }
`;

const Progress = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1b222a;
  padding: 5px;
  border-radius: 5px;
  margin: 10px 10px;
  font-size: 6px !important;
  width: fit-content;
  justify-content: space-between;
  .progressHead {
    width: 230px;
    font-size: 15px;
    text-transform: capitalize !important;
    display: flex;
    justify-content: space-between;
    align-content: space-around;
    font-weight: 10;
    padding-bottom: 2px;
  }
`;

const Remind = styled.div`
  min-width: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  .bellIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #36f5c7;
    padding: 5px;
    border-radius: 7px;
    color: #101317;
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s;
    }
  }
`;

const Main = styled.div`
  display: flex;
  background-color: #1e262f;
  width: 100px;
  border-radius: 20px;
  flex-direction: row;
  justify-content: center;
  padding: 20px 15px;
  font-weight: 700;
  color: white;
  width: inherit;
  height: 6vh;
  margin: 1% 2%;
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 910px) {
    flex-direction: column;
    height: fit-content;
    marigin-top: 40px;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  @media screen and (max-width: 810px) {
    flex-direction: column;
    margin-top: 40px;

    height: fit-content;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  @media screen and (max-width: 375px) {
    flex-direction: column;
    height: fit-content;
    justify-content: center;
    align-items: center;
    margin-top: 40px;

    align-content: center;
  }
`;

const Info = styled.div`
  display: flex;
  font-weight: 200;
  flex-direction: column;
  padding-left: 30px;

  .name {
    font-size: 18px;
  }
  .email {
    font-size: 10px;
    font-weight: 50;
    color: #bdbcbe;
  }
`;

export default UserBox;
