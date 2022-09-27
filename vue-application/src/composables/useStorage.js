import { ref, watch } from "vue";

export function useStorage(key) {
  let storedVal = localStorage.getItem(key);
  let val = ref(storedVal);

  watch(val, () => {
    write();
  });

  function write() {
    localStorage.setItem(key, val.value);
  }

  return val;
}
