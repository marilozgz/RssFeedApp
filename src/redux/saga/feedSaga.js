import { call, put,  takeLatest } from "redux-saga/effects";
import {
  fetchFeedsSuccess,
  fetchFeedFailed,
} from "../slices/feedSlice";
import { getRss } from "../../service/fetchRss";

function* fetchFeedSaga(action) {
  try {
    const feed = yield call(getRss, action);
    if (feed) {
      yield put(fetchFeedsSuccess(feed));
    } else {
      yield put(fetchFeedFailed());
    }
  } catch (error) {
    console.log("Error in workerFeedSaga", error);
    yield put(fetchFeedFailed({ error }));
  }
}

export default function* watcherFeedSaga() {
  yield takeLatest("feeds/fetchFeeds", fetchFeedSaga);
}
