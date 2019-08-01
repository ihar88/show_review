import store from '../store/store'

export const saveToLocalStorage = (locStorageItemName, itemValue) => {
    const initialStore = JSON.stringify(itemValue);
    localStorage.setItem(locStorageItemName, initialStore);
}

export const setInitialStore = (locStorageItemName, stateNameProperty) => store.state[stateNameProperty] = JSON.parse(localStorage.getItem(locStorageItemName));