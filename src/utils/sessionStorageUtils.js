export const saveToSessionStorage = (sessionStorageItemName, itemValue) => {
    const initialStore = JSON.stringify(itemValue);
    sessionStorage.setItem(sessionStorageItemName, initialStore);
}

export const setInitialStore = (sessionStorageItemName, stateNameProperty) => store.state[stateNameProperty] = JSON.parse(sessionStorage.getItem(sessionStorageItemName));