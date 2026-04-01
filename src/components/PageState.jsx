function PageState({ type, title, message }) {
  return (
    <div className={`page-state ${type}`} role="status">
      <p className="state-title">{title}</p>
      <p>{message}</p>
    </div>
  );
}

export default PageState;
