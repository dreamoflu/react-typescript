
import axios from 'axios'
const instance = axios.create();
class Method{
    public postHttp(url:string,params:object):any {
       
      instance.defaults.headers.common.token = localStorage.getItem('token');
      instance.interceptors.request.use((config)=> {
        return config;
      }, (error)=> {
        return Promise.reject(error);
      });
      instance.interceptors.response.use( (response)=> {
        return response;
      },  (error)=> {
        return Promise.reject(error);
      });
      return instance.post(url, params);
    } 
}

const utils:Method = new Method()
export default utils