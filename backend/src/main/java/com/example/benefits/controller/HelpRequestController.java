package com.example.benefits.controller;

import com.example.benefits.model.HelpRequest;
import com.example.benefits.repository.HelpRequestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/help-requests")
@RequiredArgsConstructor
public class HelpRequestController {

    private final HelpRequestRepository helpRequestRepository;

    @GetMapping
    public List<HelpRequest> getForMember(@RequestHeader("X-Member-Id") Long memberId) {
        return helpRequestRepository.findByMemberId(memberId);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public HelpRequest create(@RequestHeader("X-Member-Id") Long memberId,
                              @RequestBody HelpRequest request) {
        request.setMemberId(memberId);
        request.setStatus("open");
        return helpRequestRepository.save(request);
    }
}
