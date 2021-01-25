import { Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";


export default function CardLoading() {
  return (
    <>
      <div className="card">
        <a href="" className="card--head">
          <Skeleton variant="rect" height="150px" width="100%" />
        </a>
        <div className="card--body">
          <h2 className="card--title">
            <Typography component="div" variant="h4">
              <Skeleton variant="text" width="100%" />
            </Typography>
          </h2>
          <h3 className="card--desc">
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="100%" />
            <Skeleton variant="text" width="100%" />
          </h3>
          <div className="card--footer">
            <div className="card--price">
              <Skeleton variant="text" width="50px" />
            </div>
            <Skeleton variant="rect" width="90px" height="48px" />
          </div>
        </div>
      </div>
    </>
  );
}
