import { validateToken } from "@/apis/api-client";
import Toast from "@/components/toast/Toast";
import { ToastMessage } from "@/types"
import { useQuery } from "@tanstack/react-query";
import { ReactNode, createContext, useCallback, useContext, useState } from "react"


type AppContextType = {
    showToast: (toastMessage: ToastMessage) => void,
    closeToast: () => void,
    isTokenValidationSuccess: boolean,
    isTokenValidationLoading: boolean,
    isTokenValidationError: boolean,
    authData: { isLoggedIn: boolean, userId: string, role: string },
}

const AppContext = createContext<AppContextType | null>(null);

export const AppContextProvider = ({ children }: { children: ReactNode }) => {

    const [ toast, setToast ] = useState<ToastMessage | null>(null);

    const closeToast = useCallback(() => setToast(null), []);

    const { data, isSuccess: isTokenValidationSuccess, isLoading: isTokenValidationLoading, isError: isTokenValidationError } = useQuery({
        queryKey: [ "validateToken" ],
        queryFn: validateToken,
        retry: 0
    })

    return(
        <AppContext.Provider 
            value={{
                showToast: (toastMessage) => setToast(toastMessage),
                closeToast: closeToast,
                isTokenValidationSuccess,
                isTokenValidationLoading,
                isTokenValidationError,
                authData: { isLoggedIn: data?.success, role: data?.role, userId: data?.userId }
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