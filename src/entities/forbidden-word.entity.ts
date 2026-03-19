import { UserEntity } from './user.entity';

export class ForbiddenWordEntity {
  id!: string;
  word!: string;
  isActive!: boolean;
  createdAt!: Date;

  constructor(partial: Partial<ForbiddenWordEntity>) {
    Object.assign(this, partial);
  }
}