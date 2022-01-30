import React from "react";
import { Box } from "native-base";
import Svg, { G, Path } from "react-native-svg";

interface props {
  accentColor: string;
}

const LessonDecoration: React.FC<props> = ({ accentColor }) => {
  return (
    <>
      <Svg
        width="233.647"
        height="193.387"
        viewBox="0 0 233.647 193.387"
        style={{ position: "absolute", bottom: -90, zIndex: -4 }}
      >
        <G id="Group_64" transform="translate(-148.353 -148.95)">
          <Path
            id="Path_13"
            d="M92.241,70.788C153.049,11.366,198,20.036,198,92.945S153.676,224.957,99,224.957-54.739,165.035-32.429,112.181,31.432,130.21,92.241,70.788Z"
            transform="translate(184 117.38)"
            fill={accentColor}
          />
        </G>
      </Svg>
      <Svg
        width="136"
        height="197"
        viewBox="0 0 136 197"
        style={{ position: "absolute", top: -50, right: -75, zIndex: -4 }}
      >
        <G id="Group_63" transform="translate(61 87)">
          <G id="Path_84" transform="translate(-61 -87)" fill="none">
            <Path
              d="M68,0c37.555,0,68,44.1,68,98.5S105.555,197,68,197,0,152.9,0,98.5,30.445,0,68,0Z"
              stroke="none"
            />
            <Path
              d="M 68 7 C 34.364501953125 7 7 48.04672241210938 7 98.5 C 7 148.9532775878906 34.364501953125 190 68 190 C 101.635498046875 190 129 148.9532775878906 129 98.5 C 129 48.04672241210938 101.635498046875 7 68 7 M 68 0 C 105.5553436279297 0 136 44.0999755859375 136 98.5 C 136 152.9000244140625 105.5553436279297 197 68 197 C 30.44462585449219 197 0 152.9000244140625 0 98.5 C 0 44.0999755859375 30.44462585449219 0 68 0 Z"
              stroke="none"
              fill={accentColor}
            />
          </G>
        </G>
      </Svg>
    </>
  );
};

export default LessonDecoration;
