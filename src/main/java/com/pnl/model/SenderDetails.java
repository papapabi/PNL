package com.pnl.model;

import org.springframework.web.bind.annotation.ModelAttribute;

public class SenderDetails {
    private String name;
    private String emailAddress;
    private String subject;
    private String message;

    public String getName() {
        return name;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public String getSubject() {
        return subject;
    }

    public String getMessage() {
        return message;
    }
}
