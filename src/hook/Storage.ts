const useStorage = () => {
  const set = (value: any) => {
    localStorage.setItem("kunci", JSON.stringify(value));
  };

  const get = () => {
    const temp = localStorage.getItem("kunci");
    if (temp) {
      return JSON.parse(temp);
    }
    return null;
  };

  return {
    set,
    get,
  };
};

export default useStorage;
