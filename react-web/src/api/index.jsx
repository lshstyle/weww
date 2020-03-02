import ajax from './ajax'
import jsonp from 'jsonp'
import {message} from 'antd'


export const reqLogin = (userName, passwd) => ajax('/login/getUserInfo', {userName, passwd})

export const reqMenu = () => ajax('/menu/list', {})

export const reqCategorys = (parentId) => ajax('/category/list', {parentId})

export const reqCategoryAdd = (categoryName, parentId) => ajax('/category/add', {name:categoryName, parentId:parentId}, 'POST')

export const reqCategoryUpdate = ({categoryName, categoryId}) => ajax('/category/update', {name:categoryName, id:categoryId}, 'POST')

export const reqCategoryDelete = (categoryId) => ajax('/category/delete', {id:categoryId})

export const reqCategoryDetail = (categoryId) => ajax('/category/detail', {id:categoryId})

export const reqProducts = (pageNum, pageSize, searchType, searchName) => ajax('/product/list', {pageNum, pageSize, [searchType]:searchName},'POST')

export const reqProductUpdateStatus = (productId, status) => ajax('/product/updateStatus', {productId, status})

export const reqUploadDelete = (uploadName) => ajax('/upload/delete', {uploadName})

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
