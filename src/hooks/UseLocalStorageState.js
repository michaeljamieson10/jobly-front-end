import React, { useState, useEffect } from "react";

const UseLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    let value
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || defaultValue
        // window.localStorage.getItem(key) || JSON.stringify(defaultValue)
      )
    } catch (e) {
      console.log(e)
      value = defaultValue;
    }
    return value;
  })
  useEffect(() => {
    window.localStorage.setItem(key, state)
    // window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])
  const changeItem = (token) => {
    setState(state => token);
}
  return [state, setState, changeItem];
}

export default UseLocalStorageState;