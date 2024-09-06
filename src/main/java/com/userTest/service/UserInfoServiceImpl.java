package com.userTest.service;


import cn.hutool.core.bean.BeanUtil;
import com.userTest.model.UserInfoDto;
import com.userTest.model.UserInfoVo;
import com.userTest.repository.UserInfoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class UserInfoServiceImpl implements IUserInfoService{
    @Autowired
    private UserInfoRepository userInfoRepository;

    @Override
    public UserInfoVo checkres(UserInfoVo userInfoVo) {

        String username= userInfoVo.getUserName();
        String password=userInfoVo.getPassword();
        UserInfoDto dto =userInfoRepository.find(username,password);
        UserInfoVo uservo=new UserInfoVo();
        BeanUtil.copyProperties(dto,uservo);
        return uservo;
    }


}
