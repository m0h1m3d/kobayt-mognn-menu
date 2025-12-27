function Button({ title, value, setFiltered, active, setActive }) {
  function handleClick(e) {
    setActive(e.currentTarget.value);
    setFiltered(e.target.value);
  }

  return (
    <button
      className={`${active === value ? "active" : ""}`}
      value={value}
      onClick={(e) => handleClick(e)}
    >
      {title}
    </button>
  );
}

export default Button;
