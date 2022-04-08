export const BannerActionTypes = {
    TriggerBanner: 'TRIGGER_BANNER',
}

// usage example: dispatch(triggerBanner(alertStr.SubmitError, 'error'))
export const triggerBanner = (string, type) => async (dispatch) => {
    // type: info, error, success, warning
    dispatch({
        type: BannerActionTypes.TriggerBanner,
        payload: {string, type}
    })
}
