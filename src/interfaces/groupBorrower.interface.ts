import { PaymentsNames } from './utils/Payment.interface';

interface BorrowerAmounts {
  id_borrower: number;
  id_group: number;
  id_group_borrower: number;
  full_name: string;
  slug_borrower: string;
  amount_borrow: number;
  amount_interest: number;
  amount_pay: number;
  amount_payment_total: number;
  amount_diff_total_charged: number;
  number_payments: string;
  state_borrow: PaymentsNames;
}

interface AddMember {
  id_borrower: number;
  slug_group: string;
  amount_borrow: number;
  amount_interest: number;
  amount_payment_period: number;
  date_init_payment: string;
  payment_every_n_weeks: number;
}

interface CalculatedAmortization {
  amount_borrow: number;
  amount_interest: number;
  amount_payment_period: number;
  date_init_payment: string;
  payment_every_n_weeks: number;
}
interface Amortization {
  num_payment: number;
  date_payment: string;
  amount_payment_period: number;
  remaining_balance: number;
}

export { BorrowerAmounts, AddMember, CalculatedAmortization, Amortization };
