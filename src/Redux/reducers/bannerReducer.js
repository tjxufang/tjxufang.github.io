import {BannerActionTypes} from "Redux/actions/bannerActions";

const initialState = {
    banner: undefined,
}

export const bannerReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case BannerActionTypes.TriggerBanner:
            return {banner: payload}
        default:
            return state
    }
}
