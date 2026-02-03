function Item({ logo, title, meta, children }) {
  return (
    <div className="item">
      {logo && (
        <div className="item-logo">
          <img src={logo} alt={title} />
        </div>
      )}

      <div className="item-content">
        <h3 className="item-title">{title}</h3>

        {meta && <p className="item-meta">{meta}</p>}

        {children && <div className="item-body">{children}</div>}
      </div>
    </div>
  );
}

export default Item;
