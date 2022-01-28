import { Dispatch } from 'redux';
import { DarkMode, LightMode } from '../../static/theme';

export const LightModeAction = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: 'LIGHT_MODE',
      payload: LightMode,
    });
  };
};

export const DarkModeAction = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: 'DARK_MODE',
      payload: DarkMode,
    });
  };
};
