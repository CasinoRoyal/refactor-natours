export interface IPayment {
  pay(itemId: string): Promise<void>;
}
