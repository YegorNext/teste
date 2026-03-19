export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export const userRoleMap: Record<UserRole, UserRole> = {
  ADMIN: UserRole.ADMIN,
  USER: UserRole.USER,
};