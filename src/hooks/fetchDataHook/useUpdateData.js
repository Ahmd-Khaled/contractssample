import Cookies from "js-cookie";
import baseUrl from "./baseUrl";


export const useUpdateDataWithImage = async (url, parmas) => {
    // let lang = JSON.parse(localStorage.getItem("lang"));
    let lang = Cookies.get("lang");

    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseUrl.put(url, parmas, config);
    // console.log(res.status)
    return res;
}

export const useUpdateData = async (url, parmas) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const res = await baseUrl.put(url, parmas, config);
    return res;
}