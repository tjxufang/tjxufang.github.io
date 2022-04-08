// import api from "../../Utils/api";
// import {BannerTexts} from "Utils/constants";
// import {triggerBanner} from "Redux/actions/bannerActions";
//
// export const actUploadContactForm = (formData, onSuccess, onError) => async dispatch => {
//     let res
//     try {
//         res = await api.post('/addIdea', formData)
//         // console.log(res);
//         if (res.data.ErrorCode === 0){
//             dispatch(triggerBanner(BannerTexts.SubmitSuccess, 'success'))
//             if (typeof onSuccess === 'function') {
//                 onSuccess();
//             }
//         } else{
//             dispatch(triggerBanner(BannerTexts.SubmitFail, 'error'))
//             if (typeof onError === 'function') {
//                 onError();
//             }
//         }
//     } catch (e) {
//         console.log(e);
//         dispatch(triggerBanner(BannerTexts.SubmitFail, 'error'))
//     }
// }
