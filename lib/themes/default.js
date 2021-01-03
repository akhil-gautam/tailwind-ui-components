export default {
  button: {
    default: {
      base:
        'px-6 py-2 rounded-lg shadow-lg focus:outline-none transition duration-200 ease-in-out hover:shadow-none focus:ring-2 ring-offset-1',
      primary: 'bg-purple-600 hover:bg-purple-800 text-white',
      success: 'bg-green-500 hover:bg-green-600 text-white',
      danger: 'bg-red-500 hover:bg-red-600 text-white',
      neutral: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    },
    outline: {
      base:
        'px-6 py-2 rounded-lg focus:outline-none transition hover:shadow-none focus:ring-2 ring-offset-1',
      primary: 'border border-purple-600 text-black hover:bg-purple-800 hover:text-white',
      success: 'border border-green-500 text-black hover:bg-green-800 hover:text-white',
      danger: 'border border-red-500 text-black hover:bg-red-800 hover:text-white',
      neutral: 'border border-gray-500 text-black hover:bg-gray-800 hover:text-white',
    }
  },
  pill: {
    base: 'flex items-center space-x-1 px-3 py-px rounded-full',
    success:
      'text-green-700 bg-green-50 dark:bg-green-700 dark:text-green-50 hover:bg-green-100 dark:hover:bg-green-600',
    danger:
      'text-red-700 bg-red-50 dark:text-red-50 dark:bg-red-700 hover:bg-red-100 dark:hover:bg-red-600',
    warning:
      'text-yellow-700 bg-yellow-50 dark:text-white dark:bg-yellow-600 hover:bg-yellow-100 dark:hover:bg-yellow-600',
    primary:
      'text-purple-700 bg-purple-50 dark:text-white dark:bg-purple-600 hover:bg-purple-100 dark:hover:bg-purple-600',
  },
  backdrop: {
    base:
      'fixed inset-0 z-40 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center',
  },
  dropdown: {
    align: {
      left: 'left-0',
      right: 'right-0',
    },
    list: {
      base:
        'absolute w-64 p-2 mt-2 text-gray-700 font-medium text-base bg-white border border-gray-100 rounded-lg shadow-md min-w-max-content dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700',
    },
    item: {
      base:
        'flex w-full justify-between cursor-pointer rounded-md hover:text-black hover:bg-gray-100 px-3 py-1',
    },
  },
  input: {
    base:
      'block px-2 py-1 focus:outline-none ring-offset-2 dark:text-gray-200 leading-5',
    active: 'focus:ring-2 focus:ring-purple-300',
    valid: 'focus:ring-2 focus:ring-green-300',
    invalid: 'focus:ring-2 focus:ring-red-400',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300',
    bordered: 'border border-gray-300 rounded-md',
  },
  modal: {
    base: 'w-full my-auto p-4 overflow-hidden bg-white rounded-2xl',
    xButton:
      'inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded hover:text-gray-700',
  },
};
