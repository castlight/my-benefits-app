package com.example.benefits.repository;

import com.example.benefits.model.BenefitsPlan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BenefitsPlanRepository extends JpaRepository<BenefitsPlan, Long> {
}
