import {all} from "redux-saga/effects";
import fetchHomeSaga from "./fetchHome";
import fetchAboutSaga from "./fetchAbout";
import fetchFAQsSaga from "./fetchFAQS";
import fetchFAQsMenuSaga from "./fetchFAQMenu";
import fetchMarketplaceSaga from "./fetchMarketplace";


export default function* rootSaga() {
	yield all([
		fetchHomeSaga(),
		fetchAboutSaga(),
		fetchFAQsSaga(),
		fetchMarketplaceSaga(),
		fetchFAQsMenuSaga(),
	]);
}
