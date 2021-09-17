import store from "./store";
import * as actions from "./actions"
const unsubscribe = store.subscribe (() => {
    console.log("store Change", store.getState());
}); 

function Index1 () {

    store.dispatch ({
        type: actions.BUG_ADDED,
        playload: {
            description: "Bug1"
        }
    });

    unsubscribe();

    store.dispatch({
        type: actions.BUG_REMOVED,
        playload: {
            id: 1
        }
    })


    store.dispatch({
        type: actions.BUG_RESOLVED,
        resolved: true,
    })
    console.log(store);
}


export default Index1;
