import { Model } from '@nozbe/watermelondb';
import {
  relation,
  field,
  date,
  readonly,
} from '@nozbe/watermelondb/decorators';
import { Associations } from '@nozbe/watermelondb/Model';

import User from './User';

export default class Trainning extends Model {
  public static table = 'trainnings';

  public static associations: Associations = {
    user: { type: 'belongs_to', key: 'user_id' },
  };

  @field('tqr') tqr: number;

  @field('cps') cps: number;

  @field('rpe') rpe: number;

  @field('duration') duration: number;

  @field('user_id') user_id: string;

  @date('date') date: Date;

  @readonly @date('created_at') createdAt: Date;

  @readonly @date('updated_at') updatedAt: Date;

  @relation('user', 'user_id') user: User;
}
