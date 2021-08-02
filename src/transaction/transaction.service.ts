import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'schema/user.scema';
import { Model } from 'mongoose';
import { Transaction, TransactionDocument } from 'schema/transaction.scema';
import * as moment from 'moment';

@Injectable()
export class TransactionService {
    constructor(
        @InjectModel(User.name) private UserModel: Model<UserDocument>,
        @InjectModel(Transaction.name) private TransactionModel: Model<TransactionDocument>
    ) { }

    async create(user, data) {
        try {
            const user_data = await this.UserModel.findOne({ _id: user })
            if (user_data) {
                data.date = moment(data.date).format()
                const transaction = new this.TransactionModel({ ...data, user: user_data })
                const transaction_data = await transaction.save()
                const update = await this.UserModel.findOneAndUpdate({ _id: user }, { $push: { transactions: transaction_data._id } })
                return { success: !!update }
            }
        } catch (error) {
            console.log(error)
            return { success: true }
        }
    }
}
