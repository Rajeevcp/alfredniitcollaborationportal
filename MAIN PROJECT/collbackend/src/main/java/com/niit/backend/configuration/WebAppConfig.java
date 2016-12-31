package com.niit.backend.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;			//this tells that we have some bean configuration inside the class

@Configuration	
@EnableWebMvc				//<mvc:annotation-driven></mvc:annotation-driven>
@ComponentScan("com.niit")  //scan the components for creating the beans - controllers, services and repository
public class WebAppConfig extends WebMvcConfigurerAdapter
{
							//create an instance 
@Bean
public InternalResourceViewResolver viewResolver()
{
	InternalResourceViewResolver viewResolver=new InternalResourceViewResolver();
	viewResolver.setPrefix("/WEB-INF/views/");
	viewResolver.setSuffix(".jsp");
	return viewResolver;
}

@Bean(name = "multipartResolver")
public CommonsMultipartResolver getCommonsMultipartResolver() 
{
	CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver();
	multipartResolver.setMaxUploadSize(20971520); // 20MB
	multipartResolver.setMaxInMemorySize(1048576);	// 1MB
	return multipartResolver;
}

public void addResourceHandlers(ResourceHandlerRegistry registry)
{
	registry.addResourceHandler("/resources/**").addResourceLocations("/WEB-INF/resources/");
}
}
