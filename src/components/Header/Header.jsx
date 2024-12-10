import { categories } from "../../data/category.js";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="subheader">
      <nav>
        <ul>
          {categories.map((item) => (
            <li key={item.id}>
              <Link to={"" + item.url}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
