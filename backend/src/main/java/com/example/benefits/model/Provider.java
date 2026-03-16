package com.example.benefits.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "providers")
public class Provider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String specialty;
    private String network;
    private Double latitude;
    private Double longitude;
    @Column(name = "cost_score")
    private Integer costScore;
    @Column(name = "quality_score")
    private Integer qualityScore;
    @Column(name = "accepting_patients")
    private Boolean acceptingPatients;
}
