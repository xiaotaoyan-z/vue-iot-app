import Mock from 'mockjs'
import loginAPI from './login'
import monitorAPI from './monitor'
import friendAPI from './friends'
import deviceAPI from './devices'


//登录相关
Mock.mock(/\/v1\/register/, 'post', loginAPI.register)
Mock.mock(/\/v1\/login/, 'post', loginAPI.login)
Mock.mock(/\/v1\/user_information/, 'get', loginAPI.getUserinfo)

//监控数据
Mock.mock(/\/v1\/monitor/, 'get', monitorAPI.getMonitorList)

//获取好友列表
Mock.mock(/\/v1\/addfriend/, 'post', friendAPI.addFriend)
Mock.mock(/\/v1\/friendlist/, 'get', friendAPI.getFriends)
Mock.mock(/\/v1\/unreceived_friendlist/, 'get', friendAPI.getUnreceivedList)
Mock.mock(/\/v1\/unconfirmed_friendlist/, 'get', friendAPI.getUnconfirmedList)
Mock.mock(/\/v1\/receivefriend/, 'post', friendAPI.receiveFriend)

//注册设备
Mock.mock(/\/v1\/register_devices/, 'post', deviceAPI.addDevice)
Mock.mock(/\/v1\/devices/, 'get', deviceAPI.getDevices)
Mock.mock(/\/v1\/sharedevice/, 'post', deviceAPI.shareDevice)

export default Mock;