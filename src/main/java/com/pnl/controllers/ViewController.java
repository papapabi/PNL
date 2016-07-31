package com.pnl.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ViewController {

    @RequestMapping(value = "/about", method = RequestMethod.GET)
    public String concept() {
        return "about";
    }

    @RequestMapping(value = "/contact-us", method = RequestMethod.POST)
    public String contactUs() {
        return "contact_us";
    }
}
