export default {
  button: {
    default: {
      base:
        'px-6 py-2 flex items-center justify-center space-x-2 text-lg font-semibold rounded-lg shadow-lg focus:outline-none transition duration-400 ease-in-out hover:shadow-none focus:ring-2 ring-offset-1',
      primary: 'bg-purple-600 hover:bg-purple-800 text-white',
      success: 'bg-green-500 hover:bg-green-600 text-white',
      danger: 'bg-red-500 hover:bg-red-600 text-white',
      neutral: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
    },
    outline: {
      base:
        'px-6 py-2 rounded-lg focus:outline-none transition hover:shadow-none focus:ring-2 ring-offset-1',
      primary:
        'border border-purple-600 text-black hover:bg-purple-800 hover:text-white',
      success:
        'border border-green-500 text-black hover:bg-green-800 hover:text-white',
      danger:
        'border border-red-500 text-black hover:bg-red-800 hover:text-white',
      neutral:
        'border border-gray-500 text-black hover:bg-gray-800 hover:text-white',
    },
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
      'block w-full px-2 py-1 font-thin transition duration-200 focus:shadow-lg focus:outline-none ring-offset-2',
    active: 'focus:ring-2 focus:ring-purple-300',
    valid: 'focus:ring-2 focus:ring-green-300',
    invalid: 'focus:ring-2 focus:ring-red-400',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300',
    bordered: 'border border-gray-400 rounded-lg',
  },
  modal: {
    base: 'w-full my-auto p-4 overflow-hidden bg-white rounded-2xl',
    xButton:
      'inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded hover:text-gray-700',
  },
  table: {
    base: 'w-full whitespace-no-wrap',
    scroller: 'w-full overflow-x-auto',
    container: 'w-full overflow-hidden rounded-xl shadow-md',
  },
  thead: {
    base:
      'border-b text-md font-semibold tracking-wide text-left text-gray-500 uppercase bg-purple-50',
  },
  th: {
    base: 'py-6 px-4',
  },
  tr: {
    base: {
      even: 'bg-blue-50 transition hover:bg-gray-50',
      odd: 'bg-white transition hover:bg-gray-50',
    },
  },
  tbody: {
    base: 'text-lg font-normal divide-y text-gray-700',
  },
  td: {
    base: 'p-4',
  },
  tfoot: {
    base: 'py-6 px-4 border-t text-gray-500 bg-purple-50',
  },
  list: {
    base:
      'w-full p-6 flex flex-col justify-center items-center space-y-4 list-none',
    header:
      'w-full px-6 py-3 bg-gray-100 flex items-center justify-center rounded-md shadow-md',
    item: {
      base:
        'w-full p-6 bg-white rounded-xl shadow-sm border border-gray-50 transition duration-200 hover:bg-blue-100',
    },
  },
  alert: {
    base:
      'flex w-full px-6 py-4 my-2 rounded-xl shadow-sm font-semibold text-md',
    variant: {
      outlined: {
        default: 'border border-gray-300 text-gray-600',
        error: 'border border-red-300 text-red-600',
        warning: 'border border-yellow-300 text-yellow-600',
        success: 'border border-green-300 text-green-600',
        info: 'border border-purple-300 text-purple-600',
      },
      default: {
        default: 'bg-gray-50 text-gray-800',
        error: 'bg-red-50 text-red-800',
        warning: 'bg-yellow-50 text-yellow-800',
        success: 'bg-green-50 text-green-800',
        info: 'bg-purple-50 text-purple-800',
      },
      filled: {
        default: 'bg-gray-900 text-white',
        error: 'bg-red-900 text-white',
        warning: 'bg-yellow-900 text-white',
        success: 'bg-green-900 text-white',
        info: 'bg-purple-900 text-white',
      },
    },
  },
  avatar: {
    base: '',
    size: {
      large: 'w-20 h-20',
      regular: 'w-12 h-12',
      small: 'w-6 h-6',
    },
  },
  select: {
    base:
      'w-full border p-3 rounded-lg transition duration-200 focus:outline-none focus:ring-2 ring-purple-400',
    valid: 'border-green-300',
    invalid: 'border-red-500',
    active: '',
    disabled: 'bg-gray-100 cursor-not-allowed',
  },
  option: {
    base: '',
  },
  label: {
    base: 'block space-y-1 my-2 w-full text-gray-800 text-md font-normal',
    default: '',
    outlined:
      'p-4 rounded-xl border border-purple-600 transition hover:bg-gray-50 hover:bg-opacity-50 hover:border-purple-800',
  },
  helpertext: {
    base: 'text-sm font-semibold',
    info: 'text-gray-500',
    error: 'text-red-500',
    success: 'text-green-500',
    warn: 'text-yellow-500',
  },
  toggleSwitch: {
    base: {
      rect : 'cursor-pointer transition-all duration-400 ease-in-out fill-current text-gray-300',
      circle : 'transition-all duration-400 ease-in-out fill-current text-white',

    },
    disabled: {
      rect : 'fill-current text-gray-400',
      circle : 'fill-current text-gray-300',

    },
    primary: 'text-blue-400',
    danger: 'text-red-400',
    success: 'text-green-400',
    neutral: 'text-gray-500',
  },
  link: {
    base: 'inline font-semibold transition duration-400 ease-in-out',
    default: 'text-purple-500 hover:text-purple-700 active:text-purple-300',
    info: 'text-blue-500 hover:text-blue-700 active:text-blue-300',
    error: 'text-red-500 hover:text-red-700 active:text-red-300',
    success: 'text-green-500 hover:text-green-700 active:text-green-300',
    warn: 'text-yellow-500 hover:text-yellow-700 active:yellow-purple-300',
  },

  breadcrumbs: {
    base: 'flex w-full px-6 py-4 my-2 rounded-xl',
    default: 'border border-gray-300 bg-gray-50 text-gray-500',
    error: 'border border-red-300 bg-red-50 text-red-500',
    warn: 'border border-yellow-300 bg-yellow-50 text-yellow-500',
    success: 'border border-green-300 bg-green-50 text-green-500',
    info: 'border border-blue-300 bg-blue-50 text-blue-500',
  },
  
};
