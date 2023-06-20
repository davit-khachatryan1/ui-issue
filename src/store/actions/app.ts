import {
	TOGGLE_MENU,
	TOGGLE_MODAL_EMAIL_SHOW,
	TOGGLE_MODAL_THANKS_SHOW,
	TOGGLE_APP_THEME,
	CHANGE_APP_LANGUAGE,
	TOGGLE_SCROLL_TO_HOW,
	HOME_FETCH,
	HOME_LOADING,
	HOME_SUCCESS,
	HOME_FAILED,
	ABOUT_FETCH,
	ABOUT_LOADING,
	ABOUT_SUCCESS,
	ABOUT_FAILED,
	MARKETPLACE_FETCH,
	MARKETPLACE_LOADING,
	MARKETPLACE_SUCCESS,
	MARKETPLACE_FAILED,
	FAQS_FETCH,
	FAQS_LOADING,
	FAQS_SUCCESS,
	FAQS_FAILED,
	FAQSMenu_FETCH,
	FAQSMenu_LOADING,
	FAQSMenu_SUCCESS,
	FAQSMenu_FAILED,
} from "./types";

export function toggleMenu(data: boolean) {
	return {
		type: TOGGLE_MENU,
		payload: data,
	};
}

export function toggleModalEmailShowAction() {
	return {
		type: TOGGLE_MODAL_EMAIL_SHOW,
	};
}

export function toggleModalThanksShowAction() {
	return {
		type: TOGGLE_MODAL_THANKS_SHOW,
	};
}
export function toggleAppThemeAction() {
	return {
		type: TOGGLE_APP_THEME,
	};
}

export function changeAppLanguageAction(data : any) {
	return {
		type: CHANGE_APP_LANGUAGE,
		payload: data,
	};
}

export function toggleScrollToHowAction() {
	return {
		type: TOGGLE_SCROLL_TO_HOW,
	};
}


export function requestHomeFetchAction(filters : any) {
	return {
		type: HOME_FETCH,
		filters
	};
}

export function setHomeFetchLoadingAction() {
	return {
		type: HOME_LOADING,
	};
}

export function setHomeSuccess(strapi : any) {
	return {
		type: HOME_SUCCESS,
		payload: strapi,
	};
}

export function setHomeFailedAction(e : any) {
	return {
		type: HOME_FAILED,
		payload: e,
	};
}


//

export function requestAboutFetchAction(filters : any) {
	return {
		type: ABOUT_FETCH,
		filters
	};
}

export function setAboutFetchLoadingAction() {
	return {
		type: ABOUT_LOADING,
	};
}

export function setAboutSuccess(strapi : any) {
	return {
		type: ABOUT_SUCCESS,
		payload: strapi,
	};
}

export function setAboutFailedAction(e : any) {
	return {
		type: ABOUT_FAILED,
		payload: e,
	};
}

//

export function requestMarketplaceFetchAction(filters : any) {
	return {
		type: MARKETPLACE_FETCH,
		filters
	};
}

export function setMarketplaceFetchLoadingAction() {
	return {
		type: MARKETPLACE_LOADING,
	};
}

export function setMarketplaceSuccess(strapi : any) {
	return {
		type: MARKETPLACE_SUCCESS,
		payload: strapi,
	};
}

export function setMarketplaceFailedAction(e : any) {
	return {
		type: MARKETPLACE_FAILED,
		payload: e,
	};
}

//

export function requestFAQsFetchAction(filters : any) {
	return {
		type: FAQS_FETCH,
		filters
	};
}

export function setFAQsFetchLoadingAction() {
	return {
		type: FAQS_LOADING,
	};
}

export function setFAQsSuccess(strapi : any) {
	return {
		type: FAQS_SUCCESS,
		payload: strapi,
	};
}

export function setFAQsFailedAction(e : any) {
	return {
		type: FAQS_FAILED,
		payload: e,
	};
}

// 

export function requestFAQsMenuFetchAction(filters : any) {
	return {
		type: FAQSMenu_FETCH,
		filters
	};
}

export function setFAQsMenuFetchLoadingAction() {
	return {
		type: FAQSMenu_LOADING,
	};
}

export function setFAQsMenuSuccess(strapi : any) {
	return {
		type: FAQSMenu_SUCCESS,
		payload: strapi,
	};
}

export function setFAQsMenuFailedAction(e : any) {
	return {
		type: FAQSMenu_FAILED,
		payload: e,
	};
}
