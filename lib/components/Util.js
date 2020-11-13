export const BGCOLOR_MAP = {
  primary: "bg-blue-400",
  success: "bg-green-400",
  danger: "bg-red-500",
  white: "bg-white",
};

export const TXTCOLOR_MAP = {
  white: "text-white",
  success: "text-green-400",
  danger: "text-red-500",
  primary: "text-blue-400",
};

export const ErrOut = (message) => {
  console.error(
    `%c ${message}`,
    "font-weight: 200;color: white;background: red; padding:0.2rem 1rem; border-radius:8px;"
  );
};
