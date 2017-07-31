import { handleActions, Action } from 'redux-actions';

import { Train, IState } from './models';
import {
    STEP_CHANGED,
    PICK_PROJECT,
    NEXT,
    BACK,
    TRAIN,
    PUBLISH
} from './constants/ActionTypes';

const initialState: IState = [<Train>{ completed: false, id: 0 }];

export default handleActions<IState, Train>({
    [STEP_CHANGED] : (state: IState, action: Action<Train>): IState => {
        return [{
            id: 1,
            currentStep: action.payload.currentStep
        }, ...state];
    },
    [PICK_PROJECT]: (state: IState, action: Action<Train>): IState => {
        return [{
            id: 0,
            completed: false,
            projectName: 'Test'
        }, ...state];
    },

    [NEXT]: (state: IState, action: Action<Train>): IState => {
        return state;
    },

    [BACK]: (state: IState, action: Action<Train>): IState => {
        return state
    },

    [TRAIN]: (state: IState, action: Action<Train>): IState => {
        return [{
            model: 'model1',
            dataSet: 'dataset1',
            newOrExistingProject: 'new'
        }, ...state];
    },

    [PUBLISH]: (state: IState, action: Action<Train>): IState => {
        return state;
    }


}, initialState);
