package com.pnl.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ViewController {

    @RequestMapping("/about")
    public String concept() {
        return "about";
    }

    @RequestMapping("/contact-us")
    public String contactUs() {
        return "contact_us";
    }
}
