import { DarkMode } from '../../static/theme';

const initialState = {
  theme: DarkMode,
};

export function themeReducer(state = initialState, action: any) {
  switch (action.type) {
    case 'LIGHT_MODE':
      return (state = { theme: action.payload });
    case 'DARK_MODE':
      return (state = { theme: action.payload });
    default:
      return state;
  }
}
