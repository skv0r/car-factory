import { IPaymentSystem } from "./interfaces";

// Конкретная платежная система Webmoney
class Webmoney {
    sendPayment(value: number): string {
        return `Оплата ${value}$ через Webmoney прошла успешно.`;
    }
}

// Конкретная платежная система F2Wallet
class F2Wallet {
    charge(amount: number): string {
        return `Списано ${amount}$ через F2Wallet.`;
    }
}

// Адаптер для Webmoney
class WebmoneyAdapter implements IPaymentSystem {
    private webmoney: Webmoney;

    constructor(webmoney: Webmoney) {
        this.webmoney = webmoney;
    }

    processPayment(amount: number): string {
        return this.webmoney.sendPayment(amount);
    }
}

// Адаптер для F2Wallet
class F2WalletAdapter implements IPaymentSystem {
    private f2wallet: F2Wallet;

    constructor(f2wallet: F2Wallet) {
        this.f2wallet = f2wallet;
    }

    processPayment(amount: number): string {
        return this.f2wallet.charge(amount);
    }
}

// Экспорт классов
export { Webmoney, F2Wallet, WebmoneyAdapter, F2WalletAdapter };
