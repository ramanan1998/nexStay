import { ToastMessage } from "@/types"
import { ReactNode, createContext, useContext } from "react"


type AppContextType = {
    showToast: (toastMessage: ToastMessage) => void
}

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {

    return(
        <AppContext.Provider value={{showToast: (toastMessage: ToastMessage) => console.log(toastMessage)}}>
            {children}
        </AppContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
    return useContext(AppContext) as AppContextType;
}