export class DomainEntity {
  id!: string;
  name!: string;
  serverId?: string | null;
  repoId!: string;
  sshUrl!: string;
  price!: number;
  hasSSL!: boolean;
  campaign!: string;
  type!: 'INTERNAL' | 'EXTERNAL'; 

  constructor(partial: Partial<DomainEntity>) {
    Object.assign(this, partial);
  }
}