package com.spring.spring_swing.Controller;

import org.springframework.stereotype.Controller;

import com.spring.spring_swing.Window.Window;

import lombok.AllArgsConstructor;

@Controller
@AllArgsConstructor
public class ControllerWindow{
  
  private final Window mainWindow;

  public void prepareAndOpenFrame() {
    mainWindow.setVisible(true);
  }

}
