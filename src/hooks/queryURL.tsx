export function getQueryParam() {

    var search = window.location.search?.substring(1);

    if (!search) return {}

    return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')

}



export function convertObjToQueryURL(data: any) {
    return Object.keys(data).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k])
    }).join('&')
}


export function addQueryURL(data: Object) {
    let query = getQueryParam();
    query = Object.assign(query, data)
    return convertObjToQueryURL(query)
}