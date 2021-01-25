import Flickity from "react-flickity-component";

const flickityOptions = {
  prevNextButtons: true
};

export default function Carousel(props: any) {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      {props.images?.map((e: any, i: number) => (
        <img key={i} src={e.large_url} style={{ objectFit: "contain" }} alt="" />
      ))}
    </Flickity>
  );
}
