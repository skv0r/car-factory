import { AdminFactory, EditorFactory, CustomerFactory } from "./factory";
import { IUser, IPaymentSystem } from "./interfaces";
import { WebmoneyAdapter, F2WalletAdapter, Webmoney, F2Wallet } from "./users";
import * as readline from "readline-sync";

function createUserByRole(role: string): IUser | null {
    switch (role.toLowerCase()) {
        case "admin":
            return new AdminFactory().createUser();
        case "editor":
            return new EditorFactory().createUser();
        case "customer":
            return new CustomerFactory().createUser();
        default:
            console.log("Неверная роль!");
            return null;
    }
}

function mainCLI(): void {
    console.log("Добро пожаловать в систему управления пользователями!");

    let user: IUser | null = null;

    while (!user) {
        console.log("\nВыберите роль: Admin, Editor, Customer");
        const role = readline.question("Введите роль пользователя: ");
        user = createUserByRole(role);
    }

    console.log(`Пользователь с ролью ${user.getRole()} создан!`);

    // Выбор платежной системы
    console.log("\nВыберите платежную систему: Webmoney, F2Wallet");
    let paymentSystem: IPaymentSystem | null = null;
    while (!paymentSystem) {
        const paymentChoice = readline.question("Введите платежную систему: ");
        if (paymentChoice.toLowerCase() === "webmoney") {
            paymentSystem = new WebmoneyAdapter(new Webmoney());
        } else if (paymentChoice.toLowerCase() === "f2wallet") {
            paymentSystem = new F2WalletAdapter(new F2Wallet());
        } else {
            console.log("Некорректный выбор, попробуйте снова.");
        }
    }

    let choice: string;
    do {
        console.log("\nМеню:");
        console.log("1. Посмотреть баланс");
        console.log("2. Пополнить баланс");
        console.log("3. Снять деньги");
        console.log("4. Оплатить через выбранную платежную систему");
        console.log("5. Выйти");

        choice = readline.question("Выберите действие: ");

        switch (choice) {
            case "1":
                console.log(`Ваш баланс: ${user.getBalance()}$`);
                break;
            case "2":
                const depositAmount = parseFloat(readline.question("Введите сумму для пополнения: "));
                user.deposit(depositAmount);
                break;
            case "3":
                const withdrawAmount = parseFloat(readline.question("Введите сумму для снятия: "));
                user.withdraw(withdrawAmount);
                break;
            case "4":
                const paymentAmount = parseFloat(readline.question("Введите сумму для оплаты: "));
                console.log(paymentSystem.processPayment(paymentAmount));
                break;
            case "5":
                console.log("Выход...");
                break;
            default:
                console.log("Некорректный ввод, попробуйте снова.");
        }
    } while (choice !== "5");
}

mainCLI();
