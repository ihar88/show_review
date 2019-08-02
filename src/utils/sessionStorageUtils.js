export const saveToSessionStorage = (sessionStorageItemName, itemValue) => {
    const initialStore = JSON.stringify(itemValue);
    sessionStorage.setItem(sessionStorageItemName, initialStore);
}