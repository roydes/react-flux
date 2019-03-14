import { EventEmitter } from "events";
import globals from '../AppGlobals.js'
import dispatcher from '../AppDispacher.js';

const layoutActionTypes = globals.actionTypes.layout;
const layoutEventsTypes = globals.storeEvents.layout;

class LayoutStore extends EventEmitter {
    navbarVisisbility = true;
    getNavbarVisivility() {
        return this.navbarVisisbility;
    }
    onActionDispatched(action) {
        switch(action.type) {
          case layoutActionTypes.change_navbar_visibility: {
            this.navbarVisisbility = action.value;
            this.emit(layoutEventsTypes.navbarVisisbilityChanged);
            break;
          }
        }
    }
}
const layoutStore = new LayoutStore();
dispatcher.register(layoutStore.onActionDispatched.bind(layoutStore));
export default layoutStore;