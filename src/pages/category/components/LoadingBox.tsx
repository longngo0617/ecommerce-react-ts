import { Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import CardLoading from "./CardLoading";

export default function LoadingBox() {
  return (
    <>
      <section className="category">
        <div className="container">
          <div className="heading">
            <Skeleton animation="wave" height="50px" width="100%" />
          </div>
          <div className="filter--top">
            <div className="filter--top__group">
              <Skeleton animation="wave" height="50px" width="100%" />
            </div>
            <div className="filter--top__applied">
              <Skeleton variant="text" width="100%" />
            </div>
          </div>
          <div className="category--main">
            <div className="row">
              <div className="col-md-3">
                <Typography component="div" variant="h3">
                  <Skeleton variant="text" width="100%" />
                </Typography>
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Typography component="div" variant="h3" style={{ marginTop: '32px' }}>
                  <Skeleton variant="text" width="100%" />
                </Typography>
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Typography component="div" variant="h3" style={{ marginTop: '32px' }}>
                  <Skeleton variant="text" width="100%" />
                </Typography>
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
                <Skeleton variant="text" width="100%" />
              </div>
              <div className="col-md-9 products">
                <div className="row">
                  <div className="col-md-4">
                    <CardLoading />
                  </div>
                  <div className="col-md-4">
                    <CardLoading />
                  </div>
                  <div className="col-md-4">
                    <CardLoading />
                  </div>
                  <div className="col-md-4">
                    <CardLoading />
                  </div>
                  <div className="col-md-4">
                    <CardLoading />
                  </div>
                  <div className="col-md-4">
                    <CardLoading />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
