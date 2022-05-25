import { ConflictException } from "@nestjs/common";

export class WalletDuplicatedException extends ConflictException {
    constructor() {
        super('Wallet address already registered.');
    }
}