import globals from '../AppGlobals.js';
import dispatcher from '../AppDispacher.js';

const layoutActions = globals.actionTypes.layout;

export function changeSidenavVisisbility(visibility) {
    dispatcher.dispatch(
        {
            type: layoutActions.change_navbar_visibility,
            value: visibility
        }
    );

} 