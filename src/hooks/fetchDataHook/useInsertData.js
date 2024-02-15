import Cookies from "js-cookie";
import baseUrl from "./baseUrl";

export const useInsertData = async (url, params) => {

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

  const res = await baseUrl.post(url, params, config);
  return res;
}

export const useInsertDataLogout = async (url, params) => {

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

  const res = await baseUrl.post(url, params, config);
  console.log("___(4)___Logout While Insert Data____");
  return res;
}

// ---------------------------------------------------------------------------------------

export const useInsertFormData = async (url, params) => {

  const config = {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'allow_headers': ['Content-Type', 'Authorization', 'language', 'api_password'],
      'Accept-Language': '*',
      'apiPassword': '',
      'Authorization': `Bearer ${Cookies.get("api_token")}`,
    }
  }

  const res = await baseUrl.post(url, params, config);
  return res;
}

// ---------------------------------------------------------------------------------------
export const useInsertDataLogin = async (url, params) => {

  const config = {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'allow_headers': ['Content-Type', 'Authorization', 'language', 'api_password'],
      'Accept-Language': '*',
      'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMzkyOTMzNmE1ZDkxYWRjMTc0NmI4OGUyYmVlNTA3ZjYwMWJkM2Q3Y2IwYzY1OGUxNjcwMjViY2I3ZWExNWZjZTIzNjlhNzMxMzE0OTk1YTUiLCJpYXQiOjE3MDM0OTY3ODkuMzg0MjY5OTUyNzc0MDQ3ODUxNTYyNSwibmJmIjoxNzAzNDk2Nzg5LjM4NDI3NDk1OTU2NDIwODk4NDM3NSwiZXhwIjoxNzM1MTE5MTg4LjAwODA2Njg5MjYyMzkwMTM2NzE4NzUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.T2Xd8DupfiLZmoMHWAVPHu9EMPrdo6lK1xZ-fUbTJ7VBh2-VL59em_N1HxnOdobkGca-GSkiWZR1V7WgWOzVKgTdYBKEMBkZB2SF6ZWnrHY7rQ7DzyttFNWQD_4DRBl65GvBTGhvqO_763Nwd1mi9Bth32nN_a46_vJJF5nEzC3qKUKAJYiuuq_5GBrzdFr3m95Lb8YZkchP1_zn-5LX3URRqbmQMQqVSXOxRCb9IYrVdpy9MNBh0F3sAr5YWUlUQ6Uw33Uakjl68a5DITul2Qb_ymmBvWlfgGVKAr2r-jNtbaA-a-r-1FST4r0l_3qqy6EMq9RFFaFqlqf3tZBh6yUYedH15gyibiFPBRGErReXovYYr43f4kNpnkG8mDEZHLVE1q-RLX6seL2fPhWYf6jwtAiCyMovoQpVRWpktNwsy4XHp86rRVvRnWopk4Y39zSZAvhcaxJW8C91vIcXrrpMffugRJ5PBR4x9tTbghqLSMGqkl-Vxfh_vEbDLEwcKMQB7sUW_TxKUt6m1YPBqOVy74N9b6tSI7XBzfHEPjjHaGDQuqksh7J_zHYpYVDupFvwLXQutOXeooncgbilyOwmBOXWEC5nKH4c0qgxQWH7ZAYgDjbe2E4_nHy3xSZuQ1Lmrr5LjKMMArDMdEYpw1wqAwAIz4xzr2j5_Tyef0o`,
      'apiPassword': '',
    }
  }

  const res = await baseUrl.post(url, params, config);
  return res;
}

// ---------------------------------------------------------------------------------------
export const useInsertDataWithBody = async (url, params) => {

  const config = {
    headers: {
      "Accept": "application/json",
      "Content-Type": "multipart/form-data",
      'Access-Control-Allow-Origin': '*',
      'allow_headers': ['Content-Type', 'Authorization', 'language', 'api_password'],
      'Accept-Language': '*',
      'apiPassword': '',
      language: localStorage.getItem("i18nextLng"),
      'Authorization': `Bearer ${Cookies.get("api_token")}`,
    },
    params: params
  }

  const res = await baseUrl.post(url, params, config);
  console.log("*****useInsertDataWithBody-res:", res)
  return res;
}


// ---------------------------------------------------------------------------------------

export const useUploadFiles = async (url, params) => {

  const config = {
    headers: {
      'Accept': '*/*',
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'allow_headers': ['Content-Type', 'Authorization', 'language', 'api_password'],
      'Accept-Language': '*',
      'apiPassword': '',
      'Authorization': `Bearer ${Cookies.get("api_token")}`,
    }
  }
  
  const res = await baseUrl.post(url, params, config);
  return res;
}
