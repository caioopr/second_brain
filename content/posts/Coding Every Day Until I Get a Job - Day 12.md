---
title: Coding Every Day Until I Get a Job - Day 12
description: 'Log of Coding Every Day Challenge Day 12'
head:
  meta:
    - name: 'keywords'
      content: 'challenge,daily-coding,java'
    - name: 'author'
      content: 'Caio Prado'
publishedAt: 2025-01-19 17:15:00
tags: 'challenge,daily-coding,java'
collections: 'Coding Every Day Until I Get a Job'
toc: true
---

# {{$doc.title}}

## Log
Today i worked on a side project.

### Side Project
On the [Ixtore](https://github.com/caioopr/ixtore) project, i needed to check if the id of the user trying to call some product-related operation was the same as the user id referenced by the product. Since i'm using Spring Security, in every controller route handler method, i have access to an object of type "Authentication" as a parameter, in which i can retrieve the current logged user's id, and pass it to the service layer method, so it can perform the verification.

```java
@RestController  
@RequestMapping("/api/products")  
public class ProductsController {  
  
    @Autowired  
    final private ProductsService productsService;  
  
    public ProductsController(ProductsService productsService){  
        this.productsService = productsService;  
    }  
   
    @GetMapping("{code}")  
    @ResponseStatus(HttpStatus.OK)  
    public ProductEntity getProductsByCode(@PathVariable("code") String code, Authentication currentUser) throws ProductNotFoundException{  
        UserEntity currentUserPrincipal = (UserEntity) currentUser.getPrincipal();  
  
        return productsService.getByCode(code,currentUserPrincipal.getUser_uuid());  
    }

```


