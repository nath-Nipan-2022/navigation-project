import classNames from "classnames";

const Panal = ({ children, className, ...rest }) => {
  const finalClassNames = classNames("py-2 px-4", className);

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
};

export default Panal;
