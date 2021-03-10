import { combineEpics } from 'redux-observable';
import epics from "./testEpic";

const rootEpic = combineEpics(
    ...epics
);

export default rootEpic;
