package com.userTest.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
//持久化对象
@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "data")
public class UserInfoDto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    @Column(name = "username", length = 36, nullable = false)
    private String userName;
    @Column(name = "password", length = 36, nullable = false)
    private String password;
    @Column(name = "phone", length = 36, nullable = false)
    private String phone;
    @Column(name = "address", length = 36, nullable = false)
    private String address;
}

