function Button({ children, className, onClick }) {
  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
