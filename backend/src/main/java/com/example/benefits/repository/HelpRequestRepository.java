package com.example.benefits.repository;

import com.example.benefits.model.HelpRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface HelpRequestRepository extends JpaRepository<HelpRequest, Long> {
    List<HelpRequest> findByMemberId(Long memberId);
}
