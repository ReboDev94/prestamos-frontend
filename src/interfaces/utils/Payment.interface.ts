enum Payment {
  unpaid = 'unpaid',
  paid = 'paid',
  inprocess = 'in_proccess',
}

// type PaymentTypes = keyof typeof Payment;
type PaymentsNames = 'unpaid' | 'paid' | 'in_proccess';

function getValuePayment(paymentType: PaymentsNames) {
  let value = '';
  switch (paymentType) {
    case Payment.paid:
      value = 'Pagado';
      break;
    case Payment.unpaid:
      value = 'No Pagado';

      break;
    case Payment.inprocess:
      value = 'En proceso';
      break;
  }
  return value;
}
export { Payment, PaymentsNames, getValuePayment };
