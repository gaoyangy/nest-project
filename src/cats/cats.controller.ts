import { Controller, Get, Req, Post, Param, Body } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request): string {
        return `hello, cats`;
    }
    @Post('post')
    createFrom(@Param() params, @Body() body, @Req() req) {
        console.log(params, body)
        return `get ${JSON.stringify(body)}`
    }
}
