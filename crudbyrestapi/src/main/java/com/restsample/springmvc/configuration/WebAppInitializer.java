package com.restsample.springmvc.configuration;

import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

//configuration of dispatcher servlet
public class WebAppInitializer extends AbstractAnnotationConfigDispatcherServletInitializer{

	@Override
	protected Class<?>[] getRootConfigClasses() {
		return new Class[]{WebAppConfig.class};
	}

	@Override
	protected Class<?>[] getServletConfigClasses() {
		// TODO Auto-generated method stub
		return null;
	}
// dispatcher servlet - receives all the requests (URLs)
	@Override
	protected String[] getServletMappings() {
		return new String[]{"/"};
	}

}
