import { ofType } from 'redux-observable';
import { switchMap, tap, concatMap, mergeMap, takeUntil, map, exhaustMap } from 'rxjs/operators';
import { of, from, zip, interval } from 'rxjs';

import { asyncSuccess, allDependenciesCompleted } from "../actions/testActions"

function wait(ms, action ) {
    return new Promise((resolve, reject) => setTimeout(() => resolve(action), ms));
  }

const epic1 = (action$, state$) => { 
    return action$.pipe(
        ofType('test/initAsync'),
/*        switchMap((ac) => from(wait(5000, {})).pipe(
            map(() => ac)
        )),*/

        map((x) => asyncSuccess(x))
    ) 
}


const epic2 = (action$, state$) => { 
    return action$.pipe(
        ofType('test/initAsync'),
        switchMap(() => {
          return zip(
            action$.pipe(ofType('test/initDepAsync1')),
            action$.pipe(ofType('test/initDepAsync2')), 
            action$.pipe(ofType('test/initDepAsync3')),
            ).pipe(
                takeUntil(action$.pipe(ofType('test/stopAsync'))),
                map(x => { 
                    return allDependenciesCompleted()
                })
            )
            
        })
        
    )

}


export default [epic1, epic2]


            
    