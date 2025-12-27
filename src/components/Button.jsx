function Button({ children, className, onClick, type = "submit" }) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
