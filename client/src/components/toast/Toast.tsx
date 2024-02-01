import { ToastMessage } from "@/types"

function Toast(props: ToastMessage) {

  const { message } = props;
  return (
    <div id="toast-bottom-left" className="fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow bottom-5 left-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
        <div className="text-sm font-normal">{message}</div>
    </div>
  )
}

export default Toast