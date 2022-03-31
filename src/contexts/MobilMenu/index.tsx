//* ///////////////////////////////////////////////////////////////////////////
//* MobilMenuContex
//* ///////////////////////////////////////////////////////////////////////////
//* ===========================================================================
//* 1.- Imports
//* ===========================================================================
import { createContext, ReactNode, useState, useContext } from 'react';
//* ===========================================================================

//* ===========================================================================
//* 2.- Models / Interfaces
//* ===========================================================================
//* ---------------------------------------------------------------------------
//* 2.1.- IMobilMenuContexValues
//* ---------------------------------------------------------------------------
interface IMobilMenuContexValues {
 mobilMenuIsOpen: boolean;
 setMobilMenuIsOpen: (value: React.SetStateAction<boolean>) => void;
 mobilMenuToggle: () => void;
 openMobilMenu: () => void;
 closeMobilMenu: () => void;
}
//* ---------------------------------------------------------------------------
//* ---------------------------------------------------------------------------
//* 2.2.- IMobilMenuProviderProps
//* ---------------------------------------------------------------------------
interface IMobilMenuProviderProps {
 children: ReactNode;
}
//* ---------------------------------------------------------------------------
//* ===========================================================================

//* ===========================================================================
//* 3.- Create the context
//* ===========================================================================
const MobilMenuContex = createContext<IMobilMenuContexValues | undefined>(undefined);
//* ===========================================================================

//* ===========================================================================
//* 4.- Create the Provider
//* ===========================================================================
const MobilMenuProvider = ({ children }: IMobilMenuProviderProps) => {
 const [mobilMenuIsOpen, setMobilMenuIsOpen] = useState<boolean>(false);

 const mobilMenuToggle = () => setMobilMenuIsOpen(!mobilMenuIsOpen);
 const openMobilMenu = () => setMobilMenuIsOpen(true);
 const closeMobilMenu = () => setMobilMenuIsOpen(false);

 const data: IMobilMenuContexValues = {
  mobilMenuIsOpen,
  setMobilMenuIsOpen,
  mobilMenuToggle,
  openMobilMenu,
  closeMobilMenu
 };
 return <MobilMenuContex.Provider value={data}>{children}</MobilMenuContex.Provider>;
};
//* ===========================================================================

//* ===========================================================================
//* 5.- Create useMobilMenuContext
//* ===========================================================================
const useMobilMenuContext = () => {
 const context = useContext(MobilMenuContex);

 if (context === undefined) {
  throw Error(
   'useMobilMenuContext, must be used within a MobilMenuProvider - useMobilMenuContext, debe usarse dentro de un MobilMenuProvider'
  );
 }

 return context;
};
//* ===========================================================================

//* ===========================================================================
//* 6.- Export
//* ===========================================================================
export { MobilMenuProvider, useMobilMenuContext };
//* ===========================================================================
//* ///////////////////////////////////////////////////////////////////////////
