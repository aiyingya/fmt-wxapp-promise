/**
 * Created by Eliya on 17/4/25.
 */

const promise = {};
promise.default = promise;

/**
 * promise.app ==> getApp()
 */
Object.defineProperty(promise, 'app', {
  get: function () {
    return getApp();
  }
});

/**
 * 没有 success fail 回调
 */
var noPromiseMethods = {
  stopRecord: true,
  pauseVoice: true,
  stopVoice: true,
  pauseBackgroundAudio: true,
  stopBackgroundAudio: true,
  showNavigationBarLoading: true,
  hideNavigationBarLoading: true,
  createAnimation: true,
  createContext: true,
  hideKeyboard: true,
  stopPullDownRefresh: true
};

function forEach(key) {

  if (noPromiseMethods[key] || key.substr(0, 2) === 'on' || /\w+Sync$/.test(key)) { // 没有 success fail 回调，以 on 开头，或以 Sync 结尾的用原始的方法

    promise[key] = function () {
      /*if (__DEBUG__) {
        var res = wx[key].apply(wx, arguments);
        if (!res) {
          res = {};
        }
        if (res && typeof res === 'object') {
          res.then = function () {
            console.warn('wx.' + key + ' is not a async function, you should not use await ');
          };
        }
        return res;
      }*/
      return wx[key].apply(wx, arguments);
    };
    return;
  }

  // 转成 promise
  promise[key] = function (obj) {
    obj = obj || {};

    //++ 给Promise加入finally方法
    Promise.prototype.finally = function(callback) {
      let P = this.constructor;
      return this.then(
        value => P.resolve(callback()).then(()=>value),
        reason => P.resolve(callback()).then(()=>{throw reason})
      );
    }

    return new Promise(function (resolve, reject) {
      obj.success = resolve;
      obj.fail = function (res) {
        if (res && res.errMsg) {
          reject(new Error(res.errMsg));
        } else {
          reject(res);
        }
      };
      wx[key](obj);
    });
  };
}

Object.keys(wx).forEach(forEach);

module.exports = promise;
