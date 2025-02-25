export interface IUser {
    getRole(): string;
    getPermissions(): string[];
}
export interface IUserFactory {
    createUser(): IUser;
}

// Интерфейс для всех платежных систем
export interface IPaymentSystem {
    processPayment(amount: number): string;
}