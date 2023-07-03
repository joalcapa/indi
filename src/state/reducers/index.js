import { combineReducers } from 'redux';
import podcasts from './podcasts';
import episodes from './episodes';
import navigation from './navigation';

export default combineReducers({
    podcasts,
    episodes,
    navigation,
});