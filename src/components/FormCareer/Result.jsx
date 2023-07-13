import { Collapse } from "antd";
import React from "react";
import { CustomParagraph } from "../antd-custom/CustomTypography";
const { Panel } = Collapse;
const text = `
As the sun rose over the horizon, the city began to stir from its slumber. The streets were quiet, save for the sound of a few early risers rushing off to work or to their daily routines. The morning air was crisp, and the sky was painted with hues of pink and orange, a sight that never failed to amaze those who took the time to appreciate it. The buildings, which were once shrouded in darkness, slowly began to come alive as the first rays of sunlight illuminated their facades. The city was a bustling metropolis, filled with people from all walks of life, each with their own story to tell. As the day progressed, the streets became busier, and the sounds of honking cars and chatter filled the air. People rushed to and fro, going about their business, while others took the time to soak in the sights and sounds of the city. Despite the chaos and noise, there was a certain beauty to it all, a sense of energy that permeated everything. It was a city that never slept, a city that was always alive, always changing, and always full of surprises.
`;
export const Result = (props) => {
  const onChange = (key, value) => {
    console.log(key, value);
  };
  return (
    <Collapse onChange={onChange}>
      {props.data.map((row) => {
        return (
          <Panel header={row.label} key={row.key} className="font-medium">
            <CustomParagraph
              ellipsis={{
                rows: 3,
                expandable: true,
              }}
            >
              {text}
            </CustomParagraph>
          </Panel>
        );
      })}
    </Collapse>
  );
};
