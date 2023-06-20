import produce from "immer";

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
} from "../actions/types";

interface initialStateI {
	HomeData: Array<any>,
	HomeDataError: any,
	HomeDataFetched: boolean,
	HomeDataLoading: boolean,

	AboutData: Array<any>,
	AboutDataError: any,
	AboutDataFetched: boolean,
	AboutDataLoading: boolean,

	MarketplaceData: Array<any>,
	MarketplaceDataError: null,
	MarketplaceDataFetched: boolean,
	MarketplaceDataLoading: boolean,

	FAQsData: Array<any>,
	FAQsDataError: any,
	FAQsDataFetched: boolean,
	FAQsDataLoading: boolean,

	FAQsMenuData: Array<any>,
	FAQsMenuDataError: any,
	FAQsMenuDataFetched: boolean,
	FAQsMenuDataLoading: boolean,

	modalEmailShow: boolean,
	modalThanksShow: boolean,
	appTheme: string,
	appLanguage: string,
	scrollToHow: boolean,

	mobileMenuShow: boolean,
}

let themeCookie = typeof window !== 'undefined' ? document?.cookie?.split("; ")?.find((row) => row.startsWith("theme"))?.split("=")[1] : "theme-dark";

// let themeStorage = typeof window !== 'undefined' ? localStorage.getItem("theme") : "theme-dark";
let themeStorage = themeCookie ?  themeCookie : "theme-dark";
let langStorage = typeof window !== 'undefined' ? localStorage.getItem("language") : "EN";

const initialState = {
	HomeData: [],
	HomeDataError: null,
	HomeDataFetched: false,
	HomeDataLoading: false,

	AboutData: [],
	AboutDataError: null,
	AboutDataFetched: false,
	AboutDataLoading: false,

	MarketplaceData: [],
	MarketplaceDataError: null,
	MarketplaceDataFetched: false,
	MarketplaceDataLoading: false,

	FAQsData: [],
	FAQsDataError: null,
	FAQsDataFetched: false,
	FAQsDataLoading: false,

	FAQsMenuData: [],
	FAQsMenuDataError: null,
	FAQsMenuDataFetched: false,
	FAQsMenuDataLoading: false,

	modalEmailShow: false,
	modalThanksShow: false,
	appTheme: themeStorage !== null ? themeStorage : "theme-dark",
	// appTheme: themeCookie !== null ? themeCookie : "theme-dark",
	appLanguage: langStorage !== null ? langStorage : "EN",
	scrollToHow: false,

	mobileMenuShow: false,
};

export default function appReducer(state:initialStateI = initialState, action : any) {
	switch (action.type) {

		case TOGGLE_MENU:
			return produce(state, (draft) => {
				draft.mobileMenuShow = action.payload;
			});
		case TOGGLE_MODAL_EMAIL_SHOW:
			return produce(state, (draft) => {
				draft.modalEmailShow = !draft.modalEmailShow;
			});
		case TOGGLE_MODAL_THANKS_SHOW:
			return produce(state, (draft) => {
				draft.modalThanksShow = !draft.modalThanksShow;
			});
		case TOGGLE_APP_THEME:
			return produce(state, (draft) => {
				let newTheme = "";
				draft.appTheme == "theme-light" ? newTheme = "theme-dark" : newTheme = "theme-light";
				draft.appTheme = newTheme;
				if(draft.appTheme == "theme-light") {
					document.cookie = "theme=theme-light; max-age=43200";
				} else {
					document.cookie = "theme=theme-light; max-age=0";
				}
				localStorage.setItem("theme", newTheme);
			});
		case CHANGE_APP_LANGUAGE:
			return produce(state, (draft) => {
				draft.appLanguage = action.payload;
				localStorage.setItem("language", action.payload);
			});
		case TOGGLE_SCROLL_TO_HOW:
			return produce(state, (draft) => {
				draft.scrollToHow = !draft.scrollToHow;
			});

		case HOME_SUCCESS:
			return produce(state, (draft) => {
				draft.HomeData = action.payload;
				draft.HomeDataError = null;
				draft.HomeDataFetched = true;
				draft.HomeDataLoading = false;
			});
		case HOME_LOADING:
			return produce(state, (draft) => {
				draft.HomeDataError = null;
				draft.HomeDataFetched = false;
				draft.HomeDataLoading = true;
			});
		case HOME_FAILED:
			return produce(state, (draft) => {
				draft.HomeDataError = action.payload;
				draft.HomeDataFetched = true;
				draft.HomeDataLoading = false;
			});

		case ABOUT_SUCCESS:
			return produce(state, (draft) => {
				draft.AboutData = action.payload;
				draft.AboutDataError = null;
				draft.AboutDataFetched = true;
				draft.AboutDataLoading = false;
			});
		case ABOUT_LOADING:
			return produce(state, (draft) => {
				draft.AboutDataError = null;
				draft.AboutDataFetched = false;
				draft.AboutDataLoading = true;
			});
		case ABOUT_FAILED:
			return produce(state, (draft) => {
				draft.AboutDataError = action.payload;
				draft.AboutDataFetched = true;
				draft.AboutDataLoading = false;
			});

		case MARKETPLACE_SUCCESS:
			return produce(state, (draft) => {
				draft.MarketplaceData = action.payload;
				draft.MarketplaceDataError = null;
				draft.MarketplaceDataFetched = true;
				draft.MarketplaceDataLoading = false;
			});
		case MARKETPLACE_LOADING:
			return produce(state, (draft) => {
				draft.MarketplaceDataError = null;
				draft.MarketplaceDataFetched = false;
				draft.MarketplaceDataLoading = true;
			});
		case MARKETPLACE_FAILED:
			return produce(state, (draft) => {
				draft.MarketplaceDataError = action.payload;
				draft.MarketplaceDataFetched = true;
				draft.MarketplaceDataLoading = false;
			});

		case FAQS_SUCCESS:
			return produce(state, (draft) => {
				draft.FAQsData = action.payload;
				draft.FAQsDataError = null;
				draft.FAQsDataFetched = true;
				draft.FAQsDataLoading = false;
			});
		case FAQS_LOADING:
			return produce(state, (draft) => {
				draft.FAQsDataError = null;
				draft.FAQsDataFetched = false;
				draft.FAQsDataLoading = true;
			});
		case FAQS_FAILED:
			return produce(state, (draft) => {
				draft.FAQsDataError = action.payload;
				draft.FAQsDataFetched = true;
				draft.FAQsDataLoading = false;
			});

		case FAQSMenu_SUCCESS:
			return produce(state, (draft) => {
				draft.FAQsMenuData = action.payload;
				draft.FAQsMenuDataError = null;
				draft.FAQsMenuDataFetched = true;
				draft.FAQsMenuDataLoading = false;
			});
		case FAQSMenu_LOADING:
			return produce(state, (draft) => {
				draft.FAQsMenuDataError = null;
				draft.FAQsMenuDataFetched = false;
				draft.FAQsMenuDataLoading = true;
			});
		case FAQSMenu_FAILED:
			return produce(state, (draft) => {
				draft.FAQsMenuDataError = action.payload;
				draft.FAQsMenuDataFetched = true;
				draft.FAQsMenuDataLoading = false;
			});
		default:
			return state;
	}
}
