import * as React from 'react';
import { InputItem, List, Button, WhiteSpace } from 'antd-mobile';
// import utils from '../../utils/utils'
import axios from 'axios'
// import { api_login } from '../../utils/api'
class Person{
    public name:string
    public email:Email
    constructor(name:string,email:Email){
        this.name = name;
        this.email = email
    }
  public  getter(){
        this.name = '10'
    }
}
class Email{
    private email: string
    constructor(email:string){
        if(this.validateEmail(email)){
            this.email = this.email
            console.log(111)
        }else {
            throw new Error('这不是一个邮箱')
        }
    }
    private validateEmail(email:string){
        const reg = /\S+@\S+\./;
        return reg.test(email)
    }
}

const me = new Email('11111@qq.com')
console.log(me)

console.log(new Person('name',me))
class Teacher extends Person {
    public teach(){
        alert(1)
    }
    public getter(){
        super.getter();
        this.name = '20'
        alert('我重写了父组件的方法')
    }
}

const myteacher =  new Teacher('name',me)

myteacher.teach()
myteacher.getter()
console.log(myteacher.name)






interface ILoginState{
    name:string
    pwd:string
}

class Login extends React.Component<ILoginState>{
    public state:ILoginState = {
                            name:'',
                            pwd:''
                }
    public componentDidMount(){
        const Params={
            'phone':'18519661251',
            'verifycode':'332256'
        }
        axios.post('/medapp/api/manage/signup/conregconfig/update',Params).then((result:any)=>{
            console.log(result)

        },(error:any)=>{
            console.log(error)
        })
        
        this.setState({
            name:'18519661241'
        },()=>{
            console.log(this.state.name)
        })

    }
    public render(){
        return (
            <div>
              <List>
               <InputItem clear={true} placeholder="请输入手机号">账号</InputItem>
               <InputItem type='password' clear={true} placeholder="请输入密码">验证码</InputItem>
               <Button>获取验证码</Button>
               <WhiteSpace size="xl" />
   
               <Button type='primary'>登录</Button>
             </List>
            </div>
        )
    }

}

export default Login