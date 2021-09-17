import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "4f20486c-88c1-4174-a74d-f9d9e673de7d"}    
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(Response => {
        return Response.data
    })
}, 
follow(userId){
    return instance.post(`follow/${userId}`)
},
unfollow(userId){
    return instance.delete(`follow/${userId}`)
},
getProfile(userId) {
   return profileAPI.getProfile(userId);
}
}
export const profileAPI = {
    
getProfile(userId) {
   return instance.get(`Profile/` + userId); 
},
getStatus(userId) {
    return instance.get(`Profile/Status/` + userId); 
},
updateStatus(status) {
    return instance.put(`Profile/Status/`, {status}); 
}}

export const authAPI = {
    me() {
       return instance.get(`auth/me`)
    }
}
