package com.example.demo.adminRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.adminModel.adminModel;

@Repository
public interface adminRepository extends JpaRepository<adminModel, Long> {

}
