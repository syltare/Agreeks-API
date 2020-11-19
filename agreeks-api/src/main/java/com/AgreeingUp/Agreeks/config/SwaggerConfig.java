package com.AgreeingUp.Agreeks.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors; import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@Configuration
public class SwaggerConfig {
	@Bean
	public Docket docket() {
		return new Docket(DocumentationType.SWAGGER_2).select()
				.apis(RequestHandlerSelectors.basePackage("com.AgreeingUp.Agreeks.controller"))
				.paths(PathSelectors.any()).build().apiInfo(apiInfo());
	}

	private ApiInfo apiInfo() {
		return new ApiInfoBuilder().title("Agreeks").description("API do Projeto Agreeks").version("1.0")
				.contact(contact()).build();
	}
	
	private Contact contact(){
		return new Contact("Bianca Golin, Maurício Rodrigues, Rafael Rodrigues, Thais Gonçalves, Victor Miranda",
		"https://github.com/BiancaGolin, https://github.com/MauricioRodriguesBD, https://github.com/syltare,"
		+ " https://github.com/ThaisGoncalves, https://github.com/VictorMirandaS", "Desenvolvedores Full Stack Júnior");
	}

}
