package com.pnl.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ViewController {

    @RequestMapping(value = "/about", method = RequestMethod.GET)
    public String about() {
        return "about";
    }

    @RequestMapping(value = "/concept", method = RequestMethod.GET)
    public String concept() {
        return "concept";
    }

    @RequestMapping(value = "/contact-us", method = RequestMethod.GET)
    public String contactUsForm(Model model) {
        return "contact_us";
    }

    @RequestMapping(value = "/contact-us", method = RequestMethod.POST)
    public String contactUsSubmit() {
        return "contact_us";
    }
}
