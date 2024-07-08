//Mon Jul 08 2024 14:49:09 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const {
  getCookies,
  validateCarmeWithType,
  sign,
  wait,
  getToken,
  tryCatchPromise
} = require("./common.js");
const _0x3a58b1 = 20;
const _0x23e222 = process.env.ELE_CARME;
const _0x19f42a = require("request");
const {
  checkCk,
  getUserInfo
} = require("./common");
let _0xdeed3d = "";
async function _0x3fef51(_0x59cd58) {
  const _0x42c8aa = await _0x44d2be(_0x59cd58, 3);
  return _0x42c8aa.data.token;
}
async function _0x2f85de(_0x1ee669, _0x2ba9a2) {
  const _0x1f6cbf = {
    token: _0x2ba9a2
  };
  const _0x373509 = await _0x44d2be(_0x1ee669, 4, _0x1f6cbf);
  if (_0x373509.bizErrorMsg !== "success") {
    console.log(_0x373509.bizErrorMsg);
    return null;
  }
  return _0x373509.data.gameCode;
}
async function _0x439ad6(_0x136b14, _0x322008, _0x2210cf) {
  const _0x3e0a56 = {
    gameCode: _0x322008,
    token: _0x2210cf
  };
  const _0xaf1fd6 = await _0x44d2be(_0x136b14, 5, _0x3e0a56);
  if (_0xaf1fd6.bizErrorMsg !== "success") {
    console.log(_0xaf1fd6.bizErrorMsg);
    return null;
  }
  return _0xaf1fd6.data.lastLevelId;
}
async function _0x18c558(_0x1a0fb8, _0x5c692c) {
  const _0x1f918d = await _0x2f85de(_0x1a0fb8, _0x5c692c);
  if (_0x1f918d) {
    const _0x2c9f92 = await _0x439ad6(_0x1a0fb8, _0x1f918d, _0x5c692c);
    if (_0x2c9f92 !== 3) {
      await _0x18c558(_0x1a0fb8, _0x5c692c);
    }
  }
}
async function _0x44d2be(_0x4723d1, _0x462e4f, _0x36dced = {}) {
  const _0x46fe82 = {
    authority: "shopping.ele.me",
    accept: "application/json",
    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "no-cache",
    "content-type": "application/x-www-form-urlencoded",
    origin: "https://r.ele.me",
    pragma: "no-cache",
    referer: "https://r.ele.me/linkgame/index.html?navType=3&spm-pre=a2ogi.13162730.zebra-ele-login-module-9089118186&spm=a13.b_activity_kb_m71293.0.0",
    cookie: _0x4723d1,
    "x-ele-ua": "RenderWay/H5 AppName/wap Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36",
    "user-agent": "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36"
  };
  _0x36dced.userId = _0xdeed3d.toString();
  const _0x379548 = new Date().getTime();
  const _0x40d5c2 = 12574478;
  const _0x333d5f = getToken(_0x4723d1),
    _0x5f40db = _0x333d5f.split("_")[0];
  const _0x9eafed = await sign(_0x3a58b1, _0x462e4f, _0x40d5c2, _0x5f40db, _0x379548, _0x36dced);
  const _0x57a0d6 = _0x9eafed.sign;
  const _0x2b10ac = {
    url: "https://shopping.ele.me/h5/mtop.alsc.playgame.mini.game.dispatch/1.0/?jsv=2.6.1&appKey=12574478&t=" + _0x379548 + "&sign=" + _0x57a0d6 + "&api=mtop.alsc.playgame.mini.game.dispatch&v=1.0&type=originaljson&dataType=json&timeout=5000&subDomain=shopping&mainDomain=ele.me&H5Request=true&pageDomain=ele.me&ttid=h5%40chrome_android_87.0.4280.141&SV=5.0",
    method: "POST",
    headers: _0x46fe82,
    body: "data=" + _0x9eafed.content
  };
  return tryCatchPromise(_0xf6de68 => {
    _0x19f42a(_0x2b10ac, async (_0x2850b9, _0x4ddaaa, _0x4f6dfd) => {
      if (!_0x2850b9 && _0x4ddaaa.statusCode === 200) {
        try {
          const _0x5a6ad7 = JSON.parse(_0x4f6dfd);
          const _0x1f7d8b = JSON.parse(_0x5a6ad7.data.data);
          _0xf6de68(_0x1f7d8b);
        } catch (_0x1d32d8) {
          console.log(_0x4f6dfd);
          _0xf6de68(null);
        }
      } else {
        _0xf6de68(null);
      }
    });
  });
}
async function _0x159c59() {
  await validateCarmeWithType(_0x23e222, 1);
  const _0x49537d = getCookies();
  for (let _0x15aa99 = 0; _0x15aa99 < _0x49537d.length; _0x15aa99++) {
    const _0x3bde68 = _0x49537d[_0x15aa99];
    try {
      let _0x4564a1 = await checkCk(_0x3bde68, _0x15aa99);
      if (!_0x4564a1) {
        continue;
      }
      let _0x3b869e = await getUserInfo(_0x4564a1);
      if (!_0x3b869e.username) {
        console.log("第", _0x15aa99 + 1, "账号失效！请重新登录！！！😭");
        continue;
      }
      _0xdeed3d = _0x3b869e.user_id;
      console.log("\n****** #" + (_0x15aa99 + 1), _0x3b869e.username, "*********");
      console.log("账号的 id 为", _0xdeed3d);
      const _0x193dbb = await _0x3fef51(_0x4564a1);
      await _0x18c558(_0x4564a1, _0x193dbb);
      console.log("防止黑号延时1-3秒");
      await wait(_0x1ea183(1, 3));
    } catch (_0x30331e) {
      console.log(_0x30331e);
    }
  }
  process.exit(0);
}
_0x159c59();
function _0x1ea183(_0x4bb3eb, _0x40c50e) {
  return Math.floor(Math.random() * (_0x40c50e - _0x4bb3eb + 1) + _0x4bb3eb);
}