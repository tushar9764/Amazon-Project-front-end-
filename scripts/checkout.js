import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { update } from "./cartNumber.js";


renderOrderSummary();
renderPaymentSummary();

update();

