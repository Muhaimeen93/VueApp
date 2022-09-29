import { ref, watch } from "vue";

export function useStorage(key, val = null) {
  let storedVal = read();

  if (storedVal) {
    val = ref(storedVal);
  } else {
    val = ref(val);
    write();
  }

  watch(val, write);

  function read()
  {
    return localStorage.getItem(key);
  }

  function write() {
    if (val.value === "" || val.value===null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, val.value);
    }
  }

  return val;
}
