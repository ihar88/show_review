export const saveToLocalStorage = (locStorageItemName, itemValue) => {
    const initialStore = JSON.stringify(itemValue);
    localStorage.setItem(locStorageItemName, initialStore);
}