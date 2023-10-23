import React from "react";

interface ContextType {
  messageInputValue: string;
  updateMessageInputValue: (newValue: string) => void;
}

const messageInputContext = React.createContext<ContextType | undefined>(undefined);

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [messageInputValue, setMessageInputValue] = React.useState("");

  const updateMessageInputValue = (newValue: string) => {
    setMessageInputValue(newValue);
  };

  return (
    <messageInputContext.Provider value={{ messageInputValue, updateMessageInputValue }}>
      {children}
    </messageInputContext.Provider>
  );
}

function useContext(): ContextType {
  const context = React.useContext(messageInputContext);

  if (context === undefined) {
    throw new Error("useContext() must be used within a provider.");
  } else {
    return context;
  }
}

export { ContextProvider, useContext };