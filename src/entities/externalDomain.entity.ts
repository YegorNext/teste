export class ExternalDomainEntity {
  domainId!: string;

  constructor(partial: Partial<ExternalDomainEntity>) {
    Object.assign(this, partial);
  }
}