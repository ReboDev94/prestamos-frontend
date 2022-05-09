import axios from 'axios';
import { Payment } from '@/interfaces/utils/Payment.interface';
const PREFIX_API = import.meta.env.VITE_PREFIX_API;


const apiPaymentsPastDue = async (slug_group: string, page: number = 1, search: string = '') => {
    return await axios.get(`${PREFIX_API}payments/past-due/group/${slug_group}?page=${page}&search=${search}`);
}
const apiUpdateStatePayment = async (id_payment: number, status: Payment) => {
    return await axios.post(`${PREFIX_API}payments/update-state`, { id_payment, status })
}

const apiReportePaymentsPastDueGroup = async (slug_group: string) => {
    const url = `${PREFIX_API}reports/payments/past-due/group/${slug_group}`
    return await axios({
        method: 'GET',
        url,
        responseType: 'blob',
        headers: {
            Accept: 'application/pdf',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0'
        }
    })
}
export {
    apiPaymentsPastDue,
    apiUpdateStatePayment,
    apiReportePaymentsPastDueGroup
}