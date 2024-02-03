import Toast from "@/components/toast/Toast";
import { ToastMessage } from "@/types"
import { ReactNode, createContext, useCallback, useContext, useState } from "react"


type AppContextType = {
    showToast: (toastMessage: ToastMessage) => void,
    closeToast: () => void
}

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {

    const [ toast, setToast ] = useState<ToastMessage | null>(null);

    const closeToast = useCallback(() => setToast(null), []);

    return(
        <AppContext.Provider 
            value={{
                showToast: (toastMessage) => setToast(toastMessage),
                closeToast: closeToast
            }}
        >
            {children}
            {
                toast && 
                <Toast type={toast?.type} title={toast?.title} message={toast?.message}/>
            }
        </AppContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
    return useContext(AppContext) as AppContextType;
}