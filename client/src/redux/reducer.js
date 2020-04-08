const initialState = {
  currentContext: 'NONE',
  launchPadId: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SHOW_LANDING_PAD':
      return {
        ...state,
        currentContext: 'LANDING_PAD',
        launchPadId: action.landingPadId,
      };

    case 'SHOW_CAPSULES':
      return {
        ...state,
        currentContext: 'CAPSULES',
      };

    default:
      return state;
  }
}
