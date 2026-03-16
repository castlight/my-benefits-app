package com.example.benefits;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class BenefitsApp {
    public static void main(String[] args) {
        SpringApplication.run(BenefitsApp.class, args);
    }
}
