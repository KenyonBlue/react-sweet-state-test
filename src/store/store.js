import { createStore, createHook } from 'react-sweet-state';

const Store = createStore({
    // value of the store
    initialState: {
        name: 'thomas',
        count: 0,
    },
    actions : {
        increment: () => ({ setState, getState }) => {
            setState({ count: getState().count + 1 });
        },
        setName: (newName) => ({ setState }) => setState({ name: newName }),
    },
    name: 'counter'
});

export const useCounter = createHook(Store);