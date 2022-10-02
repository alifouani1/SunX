import React, { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { SET_BOARD_DIMENSIONS, gameModeUrlMap, SET_IMAGE_DIMENSION } from "../store/constants";
import { useSelectedGameMode } from "../hooks/selected-game-mode.hook";
import { getMeta } from "../store/reducers/image.reducer";

export const DifficultyChooser = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const levelMap = useMemo(
    () => ({
      1: 3,
      2: 4,
      3: 5
    }),
    []
  );
  const selectedGameMode = useSelectedGameMode();

  const imgDimensions = getMeta();
  console.log(imgDimensions);

  const handleClick = useCallback(
    e => {
    const payload = {
        rows: levelMap[props.level],
        columns: levelMap[props.level],
        height: imgDimensions.height,
        width: imgDimensions.width
      };
      dispatch({ type: SET_BOARD_DIMENSIONS, payload });
      history.push(gameModeUrlMap[selectedGameMode]);
      dispatch({ type: SET_IMAGE_DIMENSION, payload });
    },
    [dispatch, history, levelMap, props.level, selectedGameMode]
  );

  return <span onClick={handleClick}>{props.children}</span>;
};
