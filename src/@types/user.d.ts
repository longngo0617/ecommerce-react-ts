interface ReqLogin {
  username: string;
  password: string;
}
// interface ResLoginApi extends Res {
//   data: {
//     access_token: string;
//   };
// }
interface ReqRegister {
  email: string,
  password:string,
  name:string
}