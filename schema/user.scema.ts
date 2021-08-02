import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    name: string

    @Prop()
    email: string
    
    @Prop()
    phone: string

    @Prop()
    password: string

    @Prop({type: mongoose.Types.ObjectId, ref: 'User'})
    transactions: mongoose.Types.ObjectId
}

export const UserSchema = SchemaFactory.createForClass(User);
