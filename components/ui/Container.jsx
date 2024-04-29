export function Container({ children }) {
  return (
    // <div className=" container flex flex-col mx-auto min-w-[475px] justify-center items-center">
    //   {children}
    // </div>
    <div className=" px-6">{children}</div>
  );
}
