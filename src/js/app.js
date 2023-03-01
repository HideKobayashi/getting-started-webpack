import $ from 'jquery';
import { add, subtract } from './modules/math';

const item1price = 400;
const item2price = 600;
const coupon = 300;
const totalPrice = add(item1price, item2price);
const priceAfterApplyCoupon = subtract(totalPrice, coupon);

$('p').text(priceAfterApplyCoupon);
