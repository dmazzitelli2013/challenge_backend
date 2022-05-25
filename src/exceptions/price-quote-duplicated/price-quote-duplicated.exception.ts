import { ConflictException } from "@nestjs/common";

export class PriceQuoteDuplicatedException extends ConflictException {
    constructor() {
        super('Price quote already registered for the given token and currency. Please, update the price instead of creating a new record.');
    }
}