import {makeAutoObservable} from "mobx";
import {cloneDeep} from "lodash";
import {intlStorage} from "@/utils/tools";

const DEFAULT_USER = {
  "name": "Serati Ma",
  "avatar": "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
  "userid": "00000001",
  "email": "antdesign@alipay.com",
  "signature": "海纳百川，有容乃大",
  "title": "交互专家",
  "group": "蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED",
  "tags": [
    {
      "key": "0",
      "label": "很有想法的"
    },
    {
      "key": "1",
      "label": "专注设计"
    },
    {
      "key": "2",
      "label": "辣~"
    },
    {
      "key": "3",
      "label": "大长腿"
    },
    {
      "key": "4",
      "label": "川妹子"
    },
    {
      "key": "5",
      "label": "海纳百川"
    }
  ],
  "notifyCount": 12,
  "unreadCount": 11,
  "country": "China",
  "geographic": {
    "province": {
      "label": "浙江省",
      "key": "330000"
    },
    "city": {
      "label": "杭州市",
      "key": "330100"
    }
  },
  "address": "西湖区工专路 77 号",
  "phone": "0752-268888888",
  "role": 'admin'
};

class Login {
  userInfo: any = DEFAULT_USER;
  isLogin: Boolean = true;
  locale: string = 'zh-CN';

  constructor() {
    makeAutoObservable(this);
    this.locale = intlStorage.getValue();
  }

  async login(value) {
    let res = null;
    if (value.username === 'admin' || value.username === 'user') {
      if (value.password !== '123456') {
        return false;
      }

      res = cloneDeep(DEFAULT_USER);
      res.role = value.username;
      this.isLogin = true;
    } else {
      return false;
    }

    this.userInfo = res;
    return true;
  }

  updateLocale(value) {
    if (!value) {
      return;
    }

    intlStorage.setValue(value);
    this.locale = value;
  }

  logout() {
    this.isLogin = false;
  }
}

export default new Login();
