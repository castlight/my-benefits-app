package com.example.benefits.model;

import jakarta.persistence.*;
import lombok.Data;
import java.io.Serializable;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "benefits_plans")
public class BenefitsPlan implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String network;
    private BigDecimal deductible;
    @Column(name = "deductible_met")
    private BigDecimal deductibleMet;
    private BigDecimal copay;
    @Column(name = "coinsurance_pct")
    private Integer coinsurancePct;
    @Column(name = "oop_max")
    private BigDecimal oopMax;
    @Column(name = "oop_met")
    private BigDecimal oopMet;
}
