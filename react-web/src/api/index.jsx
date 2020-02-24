import ajax from './ajax'
import jsonp from 'jsonp'
import {message} from 'antd'


export const reqLogin = (userName, passwd) => ajax('/login/getUserInfo', {userName, passwd}, 'GET')

export const reqMenu = () => ajax('/menu/list', {}, 'GET')

export const reqCategorys = (parentId) => ajax('/category/list', {parentId})

export const reqCategoryAdd = (categoryName, parentId) => ajax('/category/add', {name:categoryName, parentId:parentId}, 'POST')

export const reqCategoryUpdate = ({categoryName, categoryId}) => ajax('/category/update', {name:categoryName, id:categoryId}, 'POST')

export const reqWeather = (city) => {
    return new Promise((resolve, reject) => {
        const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=a4uGsIZfMvmah5LjZmiydyIm9du38Mdx`
        jsonp(url, {}, (err, data) => {
            if (!err && data.status === 'success') {
                const {dayPictureUrl, weather} = data.results[0].weather_data[0]
                resolve({dayPictureUrl, weather})
            } else {
                message.error('获取天气信息失败')
            }
        })
    })
    
}
