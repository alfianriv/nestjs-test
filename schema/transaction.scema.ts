import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
    @Prop()
    amount: number

    @Prop()
    date: Date

    @Prop({ type: mongoose.Types.ObjectId, ref: 'User', required: true })
    user!: mongoose.Types.ObjectId
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
