declare namespace API {
  /** 登录参数 */
  type LoginParams = {
    LoginName: string;
    Password: string;
  };

  /** 登录成功结果 */
  type LoginResult = {
    LoginId: string;
    RName: Array;
    Rid: Array;
    Uid: string;
    Uname: string;
    codeList: Array;
  };
}
