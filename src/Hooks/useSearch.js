import { useMemo } from "react";

export default (searchTerm, objectToSearch) =>
  useMemo(() => {
    const searchItem = (item) => {
      const foundIndex = Object.keys(item).findIndex((key) => {
        if (typeof item[key] === "object") {
          if (!item[key]) {
            return false;
          }
          return searchItem(item[key]);
        }
        if (typeof item[key] === "string") {
          return item[key].toLowerCase().includes(searchTerm.toLowerCase());
        }
        return false;
      });

      return foundIndex > -1;
    };

    if (searchTerm === "") {
      return objectToSearch;
    }
    return objectToSearch.filter((obj) => searchItem(obj));
  }, [searchTerm, objectToSearch]);
