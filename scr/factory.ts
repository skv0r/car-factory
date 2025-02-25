import { IUser, IUserFactory } from "./interfaces";

class User implements IUser {
    private balance: number = 0;

    constructor(private role: string, private permissions: string[]) {}

    getRole(): string {
        return this.role;
    }

    getPermissions(): string[] {
        return this.permissions;
    }

    getBalance(): number {
        return this.balance;
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Баланс пополнен на ${amount}$`);
        } else {
            console.log("Сумма должна быть больше 0.");
        }
    }

    withdraw(amount: number): boolean {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            console.log(`Снято ${amount}$`);
            return true;
        } else {
            console.log("Недостаточно средств или неверная сумма.");
            return false;
        }
    }
}

class Admin extends User {
    constructor() {
        super("Admin", ["manage_users", "manage_products", "view_orders"]);
    }
}

class Editor extends User {
    constructor() {
        super("Editor", ["edit_products", "view_orders"]);
    }
}

class Customer extends User {
    constructor() {
        super("Customer", ["view_products", "place_orders"]);
    }
}

class AdminFactory implements IUserFactory {
    createUser(): IUser {
        return new Admin();
    }
}

class EditorFactory implements IUserFactory {
    createUser(): IUser {
        return new Editor();
    }
}

class CustomerFactory implements IUserFactory {
    createUser(): IUser {
        return new Customer();
    }
}

// Экспорт фабрик
export { AdminFactory, EditorFactory, CustomerFactory };
