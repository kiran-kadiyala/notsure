import { createAction } from 'redux-actions';
import { Train } from './models';
import { STEP_CHANGED, PICK_PROJECT, NEXT, BACK, TRAIN,PUBLISH } from './constants/ActionTypes';


const stepChanged = createAction<Train, number>(
    STEP_CHANGED,
    (index: number) => ({ currentStep: index})
);

const pickProject = createAction<Train, string>(
    PICK_PROJECT,
    (projectName: string) => ({ projectName, completed:false })
);

const next = createAction<Train, void>(
    NEXT,
    () => ({ })
);

const back = createAction<Train, void>(
    BACK,
    () => ({ })
);

const train = createAction<Train, Train>(
    TRAIN,
    (t: Train) => ({modelName: 'abc', dataSet: '123', completed:false})
)

const publish = createAction<void>(PUBLISH)



export {
    stepChanged,
    pickProject,
    next,
    back,
    train,
    publish
}
