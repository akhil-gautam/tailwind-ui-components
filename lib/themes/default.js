export default {
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
};