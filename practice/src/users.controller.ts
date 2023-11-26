/* eslint-disable prettier/prettier */
import { Controller, Get, Req, HttpCode, Res, Header, Redirect } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/users')
export class UserController {
 
  @Get('/profile')
  @HttpCode(204)
  @Header('case-cookies',"ok")
  @Header('X-name',"Prince")
  @Redirect('/users/order', 307)// bu default code 302, 
  getProfile(@Req() req:Request, @Res({passthrough:true}) res:Response) {
    console.log(req)

    // if you are not import Res than nestjs sent response on return only, most preferable method ---------
    // return {
    //     name: "prince",
    //     route:"/users/profile",
    //      by: "nestjs only"
    // }

    res.status(200)   // it over write the above status code
    // when you import Res you need to sent response and handle by your self { data type} 
    // res.json({
    //   name: "prince",
    //   route:"/users/profile",
    //    by:"by response"
    // })

    // if you want to response handle by nestjs you need to pass this value in response decorator {passthrough:true}
    //  return {
    //     name: "prince",
    //     route:"/users/profile",
    //     by:"using response but handle by nestjs"
    // }

    //Dynamic switch rout or redirection using conditions ------
    const num = ~~ (Math.random() * 10+1);

    if(num<5){
      return {
        url:"/users/order",
        statusCode: 307
      }
    }else{
      return {
        url:"/users/cart",
        statusCode: 307
      }
    }
  }

  @Get('/order')
  getOrder(){
    return "this is order page redirected by profile"
  }

  @Get('/cart')
  getCart(){
    return "this is cart redirect by profile"
  }


}
