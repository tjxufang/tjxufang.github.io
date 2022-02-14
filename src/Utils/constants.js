export const LocalStorageItems = {
    Token : "token",
}

// export const ServerBaseURL = "http://testapi.fishoal.com"
// export const ServerBaseURL = "https://api.fishoal.com"
export const ServerBaseURL = process.env.NODE_ENV !== "production" ? "http://testapi.beyoobeauty.com" : "https://api.beyoobeauty.com"

export const SDKAppID = 1400569292; // 正式
// export const SDKAppID = process.env.NODE_ENV !== "production" ? 0 : 1400569292 // 正式
