import { BannerActionTypes } from 'Redux/actions/bannerActions';

const initialState = {
  banner: undefined,
};

const bannerReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case BannerActionTypes.TriggerBanner:
      return { banner: payload };
    default:
      return state;
  }
};
export default bannerReducer;
