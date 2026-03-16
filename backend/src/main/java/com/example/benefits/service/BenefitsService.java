package com.example.benefits.service;

import com.example.benefits.model.BenefitsPlan;
import com.example.benefits.model.Member;
import com.example.benefits.repository.BenefitsPlanRepository;
import com.example.benefits.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class BenefitsService {

    private final MemberRepository memberRepository;
    private final BenefitsPlanRepository planRepository;

    @Cacheable(value = "benefits", key = "'plan'")
    public BenefitsPlan getBenefitsForMember(Long memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new RuntimeException("Member not found"));
        return planRepository.findById(member.getPlanId())
                .orElseThrow(() -> new RuntimeException("Plan not found"));
    }
}
