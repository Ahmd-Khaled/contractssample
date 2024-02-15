import Cookies from "js-cookie";
import baseUrl from "./baseUrl";

export const useGetData = async (url) => {

  const config = {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'allow_headers': ['Content-Type', 'Authorization', 'language', 'api_password'],
      'Accept-Language': '*',
      'apiPassword': '',
      'Authorization': `Bearer ${Cookies.get("api_token")}`,
    }
  }

  const res = await baseUrl.get(url, config);
  return res;
}
// ----------------------------------------------------------------------------------------------------------




















export const useGetDataWithBody = async (url, params) => {

  const config = {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'allow_headers': ['Content-Type', 'Authorization', 'language', 'api_password'],
      'Accept-Language': '*',
      'api_password': '123456',
      'language': localStorage.getItem("i18nextLng"),
      'Authorization': `Bearer ${Cookies.get("api_token")}`,
    },
    params: params
  }

  // console.log("--3-------Sending request header--");
  const res = await baseUrl.get(url, config);
  console.log("*****useGetData--request--Headers:", config)
  console.log("*****useGetData--request--URL:", url)
  // console.log("useGetData - Setting--4-------res: ", res);
  // console.log("--4-------res after Sending request header--");
  return res;
}

// -------------------------------------------------------------------------------------------
// export const useGetDataToken = async (url, params) => {
//   const config = {
//     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//   };

//   const res = await baseUrl.get(url, config);
//   return res.data;
// }


// 'language': localStorage.getItem("i18nextLng"),


// export const useGetData = async (url) => {
//   // let lang = Cookies.get("lang");
//   // let lang = JSON.parse(localStorage.getItem("i18nextLng"));

//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Allow-Origin': '*',
//       'api_password': process.env.API_PASSWORD,
//       'language': 'ar',
//       'Authorization': process.env.API_TOKEN,
//     }
//   }

//   console.log("--3-------Sending request header--");
//   const res = await baseUrl.get(url, config);
//   console.log("useGetData - Setting--4-------res: ", res);
//   console.log("--4-------res after Sending request header--");
//   return res;
// }

// export const useGetData = async (url, params) => {

//   const res = await baseUrl.get(url, params);
//   return res.data;
// }


// export const useGetDataToken = async (url, params) => {
//   const config = {
//     headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
//   };

//   const res = await baseUrl.get(url, config);
//   return res.data;
// }

