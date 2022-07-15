import {
    GET_LOGIN_NONCE,
    STORE_LOGIN_NONCE,
    LOGIN_USER,
    GET_USER,
    GET_USERS,
    STORE_USER,
    STORE_USERS,
    CREATE_USER,
    UPDATE_USER,
    GET_LOGGED_IN_USER,
    STORE_LOGGED_IN_USER,
    GET_NOTIFICATIONS,
    STORE_NOTIFICATIONS,
    STORE_UNREADSTATUS,
    FOLLOW_USER,
    UNFOLLOW_USER,
    GET_NFT,
    STORE_NFT,
    GET_FUNDS,
    STORE_FUNDS,
    UPDATE_DASHBOARD,
} from "../constants/users";

// Login
export const getLoginNonce = (walletAddress) => ({
    type: GET_LOGIN_NONCE,
    walletAddress
})
export const storeLoginNonce = (nonce) => ({
    type: STORE_LOGIN_NONCE,
    nonce
})
export const loginUser = (walletAddress, signedNonce, redirectWindow) => ({
    type: LOGIN_USER,
    walletAddress,
    signedNonce,
    redirectWindow
})

export const getNFT = (walletAddress) => ({
    type: GET_NFT,
    walletAddress
})
export const storeNFT = (nft) => ({
    type: STORE_NFT,
    nft
})

export const getFunds = (walletAddress) => ({
    type: GET_FUNDS,
    walletAddress
})
export const storeFunds = (funds) => ({
    type: STORE_FUNDS,
    funds
})

export const getUser = () => ({
    type: GET_USER,
})
export const storeUser = (user) => ({
    type: STORE_USER,
    user
})

export const getUsers = () => ({
    type: GET_USERS
})

export const storeUsers = (users) => ({
    type: STORE_USERS,
    users
})

export const getLoggedInUser = () => ({
    type: GET_LOGGED_IN_USER
})
export const storeLoggedInUser = (loggedInUser) => ({
    type: STORE_LOGGED_IN_USER,
    loggedInUser
})

export const createUser = (user, redirectWindow) => ({
    type: CREATE_USER,
    user,
    redirectWindow
})

export const updateUser = (walletAddress, updatedUser) => ({
    type: UPDATE_USER,
    walletAddress,
    updatedUser
})

export const getNotifications = (walletAddress) => ({
    type: GET_NOTIFICATIONS,
    walletAddress
})

export const storeNotifications = (notifications) => ({
    type: STORE_NOTIFICATIONS,
    notifications
})

export const storeUnreadStatus = (unreadStatus) => ({
    type: STORE_UNREADSTATUS,
    unreadStatus
})

export const updateDashboard = (walletAddress, dashboard, resetSelectedList) => ({
    type: UPDATE_DASHBOARD,
    walletAddress,
    dashboard,
    resetSelectedList
})

export const followUser = (walletAddressToFollow, profileWalletAddress, toggleFollowList) => ({
    type: FOLLOW_USER,
    walletAddressToFollow,
    profileWalletAddress,
    toggleFollowList
})
export const unfollowUser = (walletAddressToUnfollow, profileWalletAddress, toggleFollowList) => ({
    type: UNFOLLOW_USER,
    walletAddressToUnfollow,
    profileWalletAddress,
    toggleFollowList
})