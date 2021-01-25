import Hook from "./Hook";
import LocalStorage from "./LocalStorage";

const domain = "https://cfd-reactjs.herokuapp.com/";
let headers: any = {
  "Content-Type": "application/json",
};
let user: any = localStorage.getItem("user");
let _refreshToken;
if (user) {
  user = JSON.parse(user);
  headers = {
    ...headers,
    Authorization: `Bearer ${user.accessToken}`,
    // 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluIiwiaWF0IjoxNjA3MzE1MDg2LCJleHAiOjIwODA2NzkwODZ9.cDPTTv6nN8z5PwBQh4EeYGGvO0rFxb_TR9wReFedtHo`
  };
  _refreshToken = user.refreshToken;
}

let resendApi = true;
async function refreshToken() {
  let user = LocalStorage.get("token");
  if (resendApi) {
    if (user?.refreshToken) {
      resendApi = false;
      let res: any = await fetch(domain + "api/refresh-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: user.refreshToken,
        }),
      });

      if (res.status === 200) {
        res = await res.json();
        if (res.accessToken) {
          user.accessToken = res.accessToken;
          // headers.Authorization = `Bear ${res.accessToken}`

          LocalStorage.set("user", user);
          resendApi = true;
          return true;
        }
      }
      resendApi = true;
    }
  } else {
    return new Promise((resolve, reject) => {
      Hook.addActionOneTime("setLocalStorage_user", (value: string) => {
        resolve(true);
      });
    });
  }
  return false;
}

async function callApi(...params: [input: RequestInfo, init?: RequestInit]) {
  let res: any = await fetch(...params);
  if (res.status === 200) {
    return await res.json();
  }

  if (res.status === 403) {
    res = await res.json();

    if (res.error_code === "TOKEN_EXPIRED") {
      let check = await refreshToken();
      if (check) {
        let res = await fetch(...params);
        if (res.status === 200) {
          return await res.json();
        }
      }
    }
  }
}

export default (url: string) => {
  return {
    get: () => {
      let params: [input: RequestInfo, init?: RequestInit] = [
        domain + url,
        { headers },
      ];
      return callApi(...params);
    },
    post: (data: any) => {
      if (typeof data.body === 'object') {
        data.body = JSON.stringify(data.body)
      }
      let params: [input: RequestInfo, init?: RequestInit] = [
        domain + url,
        { headers, ...data, method: "POST" },
      ];
      return callApi(...params);
    },
    put: (data: any) => {
      let params: [input: RequestInfo, init?: RequestInit] = [
        domain + url,
        { headers, ...data, method: "PUT" },
      ];
      return callApi(...params);
    },
    delete: () => {
      let params: [input: RequestInfo, init?: RequestInit] = [
        domain + url,
        { headers, method: "DELETE" },
      ];
      return callApi(...params);
    },
  };
};

export function addToken(token: any) {
  headers.Authorization = `Bearer ${token.accessToken}`
  LocalStorage.set('token', token)
}