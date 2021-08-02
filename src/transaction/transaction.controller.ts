import { Controller, Param, Body, Post, Get } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { InsertDto } from './dto/insert.dto';

@Controller('transaction')
export class TransactionController {
    constructor(private service: TransactionService) { }

    @Post('/:user')
    async create(@Param() { user }, @Body() data: InsertDto) {
        return this.service.create(user, data)
    }
}
