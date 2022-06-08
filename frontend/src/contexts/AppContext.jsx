import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createSession, createUser, api, exitSession } from "../services/api";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [modalCreateCategoryIsOpen, setModalCreateCategoryIsOpen] =
    useState(false);

  function closeModalCreateCategory() {
    setModalCreateCategoryIsOpen(false);
  }

  function openModalCreateCategory() {
    setModalCreateCategoryIsOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
        modalCreateCategoryIsOpen,
        closeModalCreateCategory,
        openModalCreateCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
