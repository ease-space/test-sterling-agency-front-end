import { uiWatchersSagas } from './ui/sagas';
import { fetchWatchersSagas } from './fetch/sagas';

export default [...uiWatchersSagas, ...fetchWatchersSagas];
