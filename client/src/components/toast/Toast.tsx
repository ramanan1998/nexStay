import { useAppContext } from "@/contexts/AppContext";
import { ToastMessage } from "@/types"
import { X } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Toast(props: ToastMessage) {

  const { closeToast } = useAppContext();
  const { type, title, message } = props;

  useEffect(() => {
    const timer = setTimeout(() => closeToast(), 7000);

    return () => clearTimeout(timer);
  }, [ closeToast ]);

  let styles = "";

  if(type === "SUCCESS"){
    styles = "fixed bg-green-400 flex flex-col w-full max-w-xs p-4 text-white rounded-lg shadow bottom-5 right-5 dark:text-gray-400 dark:bg-gray-800"
  }

  if(type === "ERROR"){
    styles = "fixed bg-red-400 flex flex-col w-full max-w-xs p-4 text-white rounded-lg shadow bottom-5 right-5 dark:text-gray-400 dark:bg-gray-800"
  }

  if(type === "WARNING"){
    styles = "fixed bg-orange-400 flex flex-col w-full max-w-xs p-4 text-white rounded-lg shadow bottom-5 right-5 dark:text-gray-400 dark:bg-gray-800"
  }

  return (
    <motion.div
      initial={{
        y: 500
      }}
      animate={{
        y: 0
      }} 
      id="toast-bottom-right" 
      className={styles} 
      role="alert"
    >
        <div className="flex flex-row justify-between items-center">
          <div className="text-md font-medium">{title}</div>
          <X onClick={closeToast} className="h-4 cursor-pointer" />
        </div>
        <div className="text-sm font-normal">{message}</div>
    </motion.div>
  )
}

export default Toast