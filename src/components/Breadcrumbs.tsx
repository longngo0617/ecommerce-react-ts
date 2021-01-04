import { Link } from "react-router-dom";
import { inflate } from "zlib";

interface Breadcrumb {
  link?: string;
  title: string;
}
interface Links {
  links: Breadcrumb[];
}

export default function Breadcrumbs({ links = [] }: Links) {
  let list = links.map((e, i: number) => {
    if (e?.link) {
      return <Link to={e.link}>{e.title} </Link>;
    } else if (i < links.length - 1) {
      return <span> / {e.title}</span>;
    } else {
      return <span className="breadcrumbs--item">/ {e.title}</span>;
    }
  });
  return (
    <div className="breadcrumbs">
      <div className="inner">
        <div className="container">{list}</div>
      </div>
    </div>
  );
}
