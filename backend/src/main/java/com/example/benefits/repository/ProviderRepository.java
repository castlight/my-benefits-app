package com.example.benefits.repository;

import com.example.benefits.model.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProviderRepository extends JpaRepository<Provider, Long> {
    List<Provider> findByNetwork(String network);
}
