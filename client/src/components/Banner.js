
export default function Banner({ title, description, children }) {
  return (
    <div className="banner">
      <h2>{title}</h2>
      <p className="lead">{description}</p>
      <div className="buttons">{children}</div>
    </div>
  );
}
