# fmtr-wxapp-promise 继wxapp-promise1.0.4之后

turn api of wxapp to promise 把微信小程序 api 转成 promise. 功能是从 [labrador](https://github.com/maichong/labrador) 提取得到。
实现参考由[weapp-promise](https://github.com/GreedBell/weapp-promise)提供。

## getApp()

```
import * as wx from 'wxapp-promise';
const app = wx.app;
```

## promise

```
import * as wx from 'wxapp-promise';
async login() {
  await wx.login();
}
```

## finally方法
方法内为一个可执行函数
```
server.listen(0).then(res=>{}).finally(server.stop)
```

## Installation
```
npm install fmt-wxapp-promise
或
yarn add fmt-wxapp-promise
```

## Thanks

[labrador](https://github.com/maichong/labrador) 
[weapp-promise](https://github.com/GreedBell/weapp-promise)

## Other
更多配置信息可以参考一下vue的package.json [vue-package](https://github.com/vuejs/vue/blob/dev/package.json)
