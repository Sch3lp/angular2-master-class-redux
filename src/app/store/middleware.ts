export const logger = store => next => action => {
    return intercept(store, next, action, 'logger');
};

export const crashReporter = store => next => action => {
    try {
        return intercept(store, next, action, 'crashReporter');
    } catch (err) {
        console.error('Caught an exception!', err);
        console.groupEnd();
        throw err;
    }
};

function intercept(store, next, action, interceptorname) {
    console.group(`Redux Middleware [${interceptorname}]:`);
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state ', store.getState());
    console.groupEnd();
    return result;
}