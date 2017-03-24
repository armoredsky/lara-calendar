export const loadState =() => {
   try {
     const serializedState = localStorage.getItem('state');
     if(serializedState === null) {
       return undefined;
     } else {
       return JSON.parse(serializedState);
     }
   } catch (err) {
     console.log("err occured while loading state");
   }

}
export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      console.log(serializedState);
      localStorage.setItem('state', serializedState);
    } catch (err) {
      console.log("err occured while saving state");
    }
}
