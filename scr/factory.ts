import { IUser, IUserFactory } from "./interfaces";


class Admin implements IUser {
    getRole(): string {
        return "Admin";
    }
    getPermissions(): string[] {
        return ["manage_users", "manage_products", "view_orders"];
    }
}

class Editor implements IUser {
    getRole(): string {
        return "Editor";
    }
    getPermissions(): string[] {
        return ["edit_products", "view_orders"];
    }
}

class Customer implements IUser {
    getRole(): string {
        return "Customer";
    }
    getPermissions(): string[] {
        return ["view_products", "place_orders"];
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

// Пример использования
function createUser(factory: IUserFactory) {
    const user = factory.createUser();
    console.log(`Создан пользователь: ${user.getRole()}`);
    console.log(`Разрешения: ${user.getPermissions().join(", ")}`);
}

createUser(new AdminFactory());
createUser(new EditorFactory());
createUser(new CustomerFactory());