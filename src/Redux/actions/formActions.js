import api from "Utils/api";
import {BannerTexts} from "Utils/constants";
import {triggerBanner} from "Redux/actions/bannerActions";

export const actUploadContactForm = (formData, onSuccess, onError) => async dispatch => {
    const formattedFormData = {
        "user_id": "mknxO37I3_LCPz-GG",
        "service_id": "service_8rrk2vh",
        "template_id": "template_t43upg8",
        "template_params": {
            "to_name": "Fang",
            "from_name": formData.name,
            "reply_to": formData.email,
            "message": formData.content
        }
    }
    let res
    try {
        res = await api.post('/send', formattedFormData)
        if (res.status === 200){
            dispatch(triggerBanner(BannerTexts.SubmitSuccess, 'success'))
            if (typeof onSuccess === 'function') {
                onSuccess();
            }
        } else{
            dispatch(triggerBanner(BannerTexts.SubmitFail, 'error'))
            if (typeof onError === 'function') {
                onError();
            }
        }
    } catch (e) {
        console.log(e);
        dispatch(triggerBanner(BannerTexts.SubmitFail, 'error'))
    }
}
