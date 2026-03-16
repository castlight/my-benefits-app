package com.example.benefits.service;

import com.example.benefits.model.Provider;
import com.example.benefits.repository.ProviderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProviderService {

    private final ProviderRepository providerRepository;

    public List<Provider> searchProviders(String network, String specialty,
                                          Double lat, Double lng, Integer maxResults) {
        List<Provider> allProviders = providerRepository.findByNetwork(network);

        return allProviders.stream()
                .filter(p -> specialty == null || p.getSpecialty().equalsIgnoreCase(specialty))
                .filter(Provider::getAcceptingPatients)
                .sorted(Comparator.comparingDouble(p -> distance(lat, lng, p.getLatitude(), p.getLongitude())))
                .collect(Collectors.toList());
    }

    private double distance(Double lat1, Double lng1, Double lat2, Double lng2) {
        if (lat1 == null || lng1 == null) return 0;
        double dLat = Math.toRadians(lat2 - lat1);
        double dLng = Math.toRadians(lng2 - lng1);
        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(dLng / 2) * Math.sin(dLng / 2);
        return 3959 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }
}
