import axios from 'axios'

axios.defaults.withCredentials = true

export default class HttpService
{
    // _domain = 'http://localhost:80'
    _domain = "http://lrb-app.herokuapp.com"
    _url = `${this._domain}/web`

    get domain() {
        return this._domain
    }

    get url() {
        return this._url
    }

    postData = (path, item, tokenId="") => {
        let requestOptions = this.postRequestOptions({ item, })
        let token
        if (tokenId.length) {
            token = localStorage.getItem(tokenId)
            requestOptions = this.postRequestOptions({ token, item, })
        }

        return axios.post(this.url+"/"+path, requestOptions.data, requestOptions.headers).then(
            res => res
        )
    }

    getData = (path, tokenId="") => {
        let requestOptions = this.getRequestOptions()
        let token
        if (tokenId.length) {
            token = localStorage.getItem(tokenId)
            requestOptions = this.getRequestOptions(token)
        }
        let url = this.url+"/"+path
        if (null !== path.match(/http/g)) {
            url = path
        }
        return axios.get(url, { headers: requestOptions.headers, }).then(
            res => res
        )
    }

    getRequestOptions = (token) => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-type' : 'application/json', }
        }
        if (token) {
            requestOptions.headers.Authorization = 'Bearer ' +token
        }
        return requestOptions
    }

    postRequestOptions = ({ token, item, }) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-type' : 'application/json', },
            data : item,
        }
        if (token) {
            requestOptions.headers.Authorization = 'Bearer ' +token
        }
        return requestOptions
    }
}
