package com.spring.spring_swing;

import javax.swing.SwingUtilities;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;

import com.spring.spring_swing.Controller.ControllerWindow;

@SpringBootApplication
public class TestandoApplication {

	// public static void main(String[] args) {
	// 	SpringApplication.run(TestandoApplication.class, args);
	// }


	public static void main(String... args) {
        ConfigurableApplicationContext context = createApplicationContext(args);
        displayMainFrame(context);
    }

    private static ConfigurableApplicationContext createApplicationContext(String... args) {
        return new SpringApplicationBuilder(TestandoApplication.class)
                .headless(false)
                .run(args);
    }

    private static void displayMainFrame(ConfigurableApplicationContext context) {
        SwingUtilities.invokeLater(() -> {
            ControllerWindow mainMenuController = context.getBean(ControllerWindow.class);
            mainMenuController.prepareAndOpenFrame();
        });
    }
}
