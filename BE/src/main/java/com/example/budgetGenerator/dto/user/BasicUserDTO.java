package com.example.budgetGenerator.dto.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BasicUserDTO {
    private String email;
    private String password;
}
