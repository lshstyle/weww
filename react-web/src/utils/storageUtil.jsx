
import store from 'store'

const USER_KEY = 'user_key'
const MENUS_KEY = 'menus_key'
export default {
    
    saveUser(user) {
        store.set(USER_KEY, user)
    },

    getUser() {
        return store.get(USER_KEY) ||{}
    },

    removeUser() {
        store.remove(USER_KEY)
    },

    saveMenus(menus) {
        store.set(MENUS_KEY, menus)
    },

    getMenus() {
        return store.get(MENUS_KEY) || []
    },
    
    removeMenus() {
        store.remove(MENUS_KEY)
    }

}