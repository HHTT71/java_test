package com.userTest;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import javax.annotation.PostConstruct;
import java.util.TimeZone;

@SpringBootApplication(scanBasePackages ="com.userTest" )
@EnableJpaAuditing
@Slf4j

public class UserTestApplication {

	@Value("${spring.datasource.url}")
	private String datasource;

	@PostConstruct
	public void onLoad(){
		log.info("datasource url: {}", datasource);
        TimeZone.setDefault(TimeZone.getTimeZone("Asia/Shanghai"));
    }

	public static void main(String[] args) {

		SpringApplication.run(UserTestApplication.class, args);
	}

}

