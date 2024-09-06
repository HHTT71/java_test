package com.userTest.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

//数据传输对象
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserInfoVo implements  Serializable{
    private int id;
    private String userName;
    private String password;
    private String phone;
    private String address;

}
