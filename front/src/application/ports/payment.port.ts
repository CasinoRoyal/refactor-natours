export interface PaymentService {
  pay(tourPrice: number): Promise<boolean>
}