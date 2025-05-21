import { createContext, useContext, useState } from "react";

// إنشاء السياق
const LoadingContext = createContext();

// Hook مخصص للاستخدام في المكونات
export const useLoading = () => useContext(LoadingContext);

// مزود السياق
export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasFetchedOnce, setHasFetchedOnce] = useState(false);

  return (
    <LoadingContext.Provider
      value={{ isLoading, setIsLoading, hasFetchedOnce, setHasFetchedOnce }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
