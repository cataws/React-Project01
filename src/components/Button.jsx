const Button = function (props) {
  const { children, className, onClick } = props;
  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
