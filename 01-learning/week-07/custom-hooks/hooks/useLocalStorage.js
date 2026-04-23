import { useState } from "react";

function useLocalStorage(key, initialValue) {
  // Step 1: Read from localStorage
  const savedValue = localStorage.getItem(key);
  const [storedValue,setStoredValue] = useState(savedValue==null?initialValue:savedValue)
  // Step 2: useState with the right value
  const setValue = (newValue) =>
  {
    setStoredValue(newValue)
    localStorage.setItem(key,newValue);
  }
  // Step 3: Custom setter
  // Step 4: Return
  return [storedValue,setValue]
}

export default useLocalStorage;