import * as Effects from "redux-saga/effects";

const call: any = Effects.call;
const put: any = Effects.put;
const takeLatest = Effects.takeLatest;


async function fetchStrapi(params : any) {

	// GET request using fetch inside useEffect React hook
	const token = "fc54bc5b955666bf406b8804c1aaaaf679162af750bd733909a846c988a38da12272eb9d22947809f4549c1f7d4a9a5f0b251e83f673a7ef250b58db51e3df4adf42c77521aaeca4a16d49e6f23ab3fb9877ca8525811372c9ed884e67abc13827aafd3858274ed00f8d534da67d43171d730faf011295459673d0f4455634e5";
	const options = {
	   method: 'GET',
	   headers: {
		 'Content-type': 'application/json',
		 'Authorization': `bearer ${token}`, // notice the Bearer before your token
		},
	 };
	return await fetch("https://webmaster.dequity.io/api/home-page?locale="+params.lang, options)
	  .then((response) => response.json())
	  .catch((e)=>{throw e})
	// empty dependency array means this effect will only run once (like componentDidMount in classes)

}
import {
	setHomeFailedAction,
    setHomeFetchLoadingAction,
    setHomeSuccess
} from "../actions/app";

import {HOME_FETCH} from "../actions/types";
// import {takeEvery} from "@redux-saga/core/types/effects";

function* asyncfetchCollectionNFTs(params : any): Generator<any> {
	yield put(setHomeFetchLoadingAction());

	try {
		const strapiData = yield call(fetchStrapi, params.filters);

		yield put(setHomeSuccess(strapiData));
	} catch (e) {
		yield put(setHomeFailedAction(e));
	}
}

export default function* fetchHomeSaga() {
	yield takeLatest(HOME_FETCH, asyncfetchCollectionNFTs);
}
