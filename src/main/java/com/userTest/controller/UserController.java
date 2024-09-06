package com.userTest.controller;

import cn.hutool.json.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.userTest.model.UserInfoVo;
import com.userTest.service.IUserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping(value = "/user")
@Component
public class UserController {
    @Autowired
    private IUserInfoService userInfoService;
  /*  @Autowired
    public UserController(IUserInfoService userService) {
        this.userInfoService = userService;
    }*/


    /**
     * 登录
     * @param response

     * @param session
     * @return
     */
    @PostMapping(value = "/login")
    public void  login(HttpServletResponse response, @RequestBody String  userTemp,HttpSession session) throws IOException {
        /**
         * 登录的参数及返回，包括业务处理流程
         *
         */
        String[] tempStr=userTemp.split("&");
         UserInfoVo uservo=new UserInfoVo();
        if(tempStr.length==2){
            UserInfoVo persons=new UserInfoVo();
            persons.setUserName(tempStr[0].split("=")[1]);
            persons.setPassword(tempStr[1].split("=")[1]);
            uservo=userInfoService.checkres(persons);
        }
  if(uservo!=null){
      session.setAttribute("userInfo",uservo);
       response.sendRedirect("/xsgl/index.jsp");
  }
   return;
    }

}
