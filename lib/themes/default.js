export default {
  button: {
    base:
      'px-4 py-2 rounded-md shadow-md focus:outline-none hover:shadow-lg focus:ring-2 ring-offset-1',
    primary: 'bg-blue-600 text-white',
    success: 'bg-green-500 text-white',
    danger: 'bg-red-500 text-white',
    default: 'bg-gray-50 text-gray-800',
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
    base: 'block px-2 py-1 focus:outline-none dark:text-gray-200 leading-5',
    active: 'focus:ring-2 focus:ring-purple-200',
    valid: 'focus:ring-2 focus:ring-green-200',
    invalid: 'focus:ring-2 focus:ring-red-200',
    disabled: 'cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800',
    bordered: 'border border-gray-400 rounded-md'
  }
};
