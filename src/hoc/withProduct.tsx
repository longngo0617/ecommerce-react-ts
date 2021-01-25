function currencyFormat(num: number) {
  return new Intl.NumberFormat("vn", { maximumSignificantDigits: 3 }).format(
    num
  );
}
export default function withProduct(WrapComponent: JSX.Element | any,data: any) {
  let { price, real_price, name, thumbnail_url, stock_item } = data;

  let percent = 100 - Math.round(real_price / price * 100)
  let price_str = currencyFormat(data.price);
  let real_price_str = currencyFormat(data.real_price);
  let props: any = {
    ...data,
    price_str,
    real_price_str,
    percent
}
  return <WrapComponent {...props} />;
}
