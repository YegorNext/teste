export class InternalDomainEntity {
  domainId!: string;

  constructor(partial: Partial<InternalDomainEntity>) {
    Object.assign(this, partial);
  }
}