package com.userTest.repository;


import com.userTest.model.UserInfoDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserInfoRepository extends JpaRepository<UserInfoDto, Long> {


    @Query(value = "select * from data where username = :username and  password= :password", nativeQuery = true)
    UserInfoDto find(String username, String password);


}
