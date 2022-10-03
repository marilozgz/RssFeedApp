import {call, put, takeEvery} from 'redux-saga/effects';
import {fetchFeedsSuccess, fetchFeedFailed} from '../slices/feedSlice';
import {getRss} from '../api/feedApi';

function* fetchFeedSaga(action) {
    try{
        const feed = yield call(getRss, action); 
        yield put(fetchFeedsSuccess(feed));

    }catch(error){
        console.log('Error in workerFeedSaga', error);
        yield put(fetchFeedFailed({error}))
    }
}

export default function* watcherFeedSaga() {
  yield takeEvery('feeds/fetchFeeds', fetchFeedSaga);
}

