import axios from 'axios'
import HttpService from './HttpService'

axios.defaults.withCredentials = true

export const ExchangeRateService = (payload) => {
    const http = new HttpService()
    
    return new Promise((resolve, reject) => {
        const url = new URL(http.api+'/exchange')
        for (const key in payload) {
            url.searchParams.append(key, payload[key])
        }
        http.getData(http.api+'/sanctum/csrf-cookie').then( 
            // 419 when without csrf wrapper
            () => http.getData(url.href)
                .then(data => {
                    // console.log('exchange rate service res', data)
                    return resolve(data.data.data)
                })
                .catch(err => reject(err))
        ).catch(err => reject(err))
    })
}

export const SymbolService = () => {
    const http = new HttpService()

    return new Promise((resolve, reject) => {
        const url = new URL(http.api+'/exchange/symbols')
        http.getData(http.api+'/sanctum/csrf-cookie').then( 
            // 419 when without csrf wrapper
            () => http.getData(url.href)
                .then(data => {
                    // console.log('symbol service res', data)
                    return resolve(data.data.data)
                })
                .catch(err => reject(err))
        ).catch(err => reject(err))
    })
}

export const BaseCharactersService = () => {
    const http = new HttpService()
    
    return new Promise((resolve, reject) => {
        const url = new URL(http.api+'/exchange/basecharacters')
        http.getData(http.api+'/sanctum/csrf-cookie').then( 
            // 419 when without csrf wrapper
            () => http.getData(url.href)
                .then(data => {
                    // console.log('base characters service res', data)
                    return resolve(data.data.data)
                })
                .catch(err => reject(err))
        ).catch(err => reject(err))
    })
}
