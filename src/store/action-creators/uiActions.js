import { uiActionTypes } from "../types"

export const setNavbarVisibility = (navBarVisibility) => {
    return {
        type: uiActionTypes.SET_NAVBAR_VISIBILITY,
        payload: navBarVisibility,
    }
}
