


export default function getQueryString(urlParams: any, props?: { data?: Object, remove?: Object }) {
    let queryString = getQueryParam()

    let catID = urlParams?.id?.replace(/[^0-9]/g, '');
    if (catID) {
        queryString.categories = catID;
    }

    if (props?.remove) {
        for (let i in props.remove) {
            delete queryString[i]
        }
    }

    if (props?.data) {
        queryString = Object.assign(queryString, props.data);
    }

    // if (!queryString.sort) {
    //     queryString.sort = 'real_price.-1'
    // }

    return convertObjToQueryURL(queryString)
}


export function getQueryParam() {

    var search = window.location.search?.substring(1);

    if (!search) return {}

    return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')

}



// export function convertObjToQueryURL(data: any) {
//     return window.location.pathname + '?' + Object.keys(data).map(function (k) {
//         return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
//     }).join('&')
// }
export function convertObjToQueryURL(data: any) {
    return Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}


export function addQuery(data: Object) {
    let query = getQueryParam();
    query = Object.assign(query, data)
    return convertObjToQueryURL(query)
}