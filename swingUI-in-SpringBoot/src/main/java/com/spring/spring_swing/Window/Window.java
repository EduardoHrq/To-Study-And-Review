package com.spring.spring_swing.Window;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.WindowConstants;

import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;

@Component
public class Window extends JFrame {

  @PostConstruct
  private void prepareFrame() {
    setFrameUp();
    initComponents();
  }

  private void setFrameUp() {
    setTitle("Teste");
    setSize(600, 600);
    setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
    setLocationRelativeTo(null);
    setResizable(false);
  }

  private void initComponents() {
    JLabel label = new JLabel("This a swing window in spring boot application!");

    add(label);
  }

}
