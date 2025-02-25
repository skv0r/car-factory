export interface IUser {
    getRole(): string;
    getPermissions(): string[];
    getBalance(): number;
    deposit(amount: number): void;
    withdraw(amount: number): boolean;
}

export interface IUserFactory {
    createUser(): IUser;
}

// Интерфейс для всех платежных систем
export interface IPaymentSystem {
    processPayment(amount: number): string;
}
