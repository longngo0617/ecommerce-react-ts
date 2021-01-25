import { Pagination, PaginationItem } from "@material-ui/lab";
import { Link, useRouteMatch } from "react-router-dom";
import { addQuery } from "../helper/url";
 
export default function Paginate({ props }: any) {
  const {url} = useRouteMatch()
  return (
    <div className="paginate">
      <div className="paginate--wrap">
        <ul className="page--wrap">
          <Pagination
            page={props.currentPage}
            count={props.totalPage}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`${url}?${addQuery({ page: item.page })}`}
                {...item}
              />
            )}
          />
        </ul>
      </div>
    </div>
  );
}
