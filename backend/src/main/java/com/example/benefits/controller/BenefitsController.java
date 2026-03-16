package com.example.benefits.controller;

import com.example.benefits.model.BenefitsPlan;
import com.example.benefits.service.BenefitsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/benefits")
@RequiredArgsConstructor
public class BenefitsController {

    private final BenefitsService benefitsService;

    @GetMapping
    public BenefitsPlan getBenefits(@RequestHeader("X-Member-Id") Long memberId) {
        return benefitsService.getBenefitsForMember(memberId);
    }
}
