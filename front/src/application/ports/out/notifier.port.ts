export interface INotifier {
  success(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  info(message: string): void;
}
