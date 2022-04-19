import { BannerActionTypes } from 'Redux/actions/bannerActions';

const initialState = {
  banner: undefined,
};

// eslint-disable-next-line import/prefer-default-export,default-param-last
export const bannerReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case BannerActionTypes.TriggerBanner:
      return { banner: payload };
    default:
      return state;
  }
};
