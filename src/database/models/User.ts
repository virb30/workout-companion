import { Model } from '@nozbe/watermelondb';
import {
  children,
  field,
  date,
  readonly,
} from '@nozbe/watermelondb/decorators';
import { Associations } from '@nozbe/watermelondb/Model';

import Trainning from './Trainning';

export default class User extends Model {
  public static table = 'users';

  public static associations: Associations = {
    trainnings: { type: 'has_many', foreignKey: 'user_id' },
  };

  @field('name') name: string;

  @field('email') email: string;

  @readonly @date('created_at') createdAt: Date;

  @readonly @date('updated_at') updatedAt: Date;

  @children('trainnings') trainnings: Trainning[];
}
