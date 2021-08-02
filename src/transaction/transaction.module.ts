import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema, User } from 'schema/user.scema';
import { TransactionSchema, Transaction } from 'schema/transaction.scema';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }, { name: Transaction.name, schema: TransactionSchema }])],
  controllers: [TransactionController],
  providers: [TransactionService]
})
export class TransactionModule {}
