package com.example.benefits.controller;

import com.example.benefits.model.Provider;
import com.example.benefits.service.ProviderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/providers")
@RequiredArgsConstructor
public class ProviderController {

    private final ProviderService providerService;

    @GetMapping
    public List<Provider> search(
            @RequestParam String network,
            @RequestParam(required = false) String specialty,
            @RequestParam(required = false) Double lat,
            @RequestParam(required = false) Double lng,
            @RequestParam(required = false, defaultValue = "50") Integer maxResults) {
        return providerService.searchProviders(network, specialty, lat, lng, maxResults);
    }
}
