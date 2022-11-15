import React from 'react'
import { showPriceWithCurrency } from '../../UTULITIES/productFunction'
import Icon from '../Icon'

const SummaryLabel = ({icon, text, children}) => {
  return(
    <div className='flex gap-x-2 items-center'>
      <Icon name={icon} className='w-5 h-5 text-accent-secondary/75'/>
      <span className='hidden xs:inline-flex text-my-neutral first-letter:uppercase'>
        {text}
        &nbsp;
        { children && children}
      </span>
    </div>
  )
}

const CartSummary = ({total, taxPercent = 20, discount = 0 , shippingCost = 0}) => {
  const priceTax = (total * taxPercent ) / 100
  const priceWithoutTax = total - priceTax
  const priceTotal = total + shippingCost - discount
  return (
    <aside className='lg:w-1/3 w-full bg-white p-4 rounded shadow-xl'>
      <h1 className='text-accent-secondary text-base font-medium pb-2 border-b border-accent/20'>Cart summary</h1>
      <main className='py-3 border-b border-accent/20 text-sm flex flex-col gap-y-4 md:gap-y-6'>
        <div className='flex justify-between items-center gap-x-3'>
          <SummaryLabel text='Price' icon='banknotes'/>
          <span className='text-secondary font-medium'>{showPriceWithCurrency(priceWithoutTax)}</span>
        </div>
        <div className='flex justify-between items-center gap-x-3'>
          <SummaryLabel text='VAT' icon='receipt-tax'><span className='font-medium'>{` (${taxPercent}%)`}</span></SummaryLabel>
          <span className='text-secondary font-medium'>{showPriceWithCurrency(priceTax)}</span>
        </div>
        <div className='flex justify-between items-center gap-x-3'>
          <SummaryLabel text='Discount' icon='gift'/>
          <span className='text-secondary font-medium'>
            {discount ? <span className='text-accent-secondary/75'>showPriceWithCurrency(discount)</span>: <span className='font-bold'>&#126;</span>}
          </span>
        </div>
        <div className='flex justify-between items-center gap-x-3'>
          <SummaryLabel text='Shipping cost' icon='truck'/>
          <span className='text-secondary font-medium'>{shippingCost ? showPriceWithCurrency(shippingCost) : <span className='font-bold uppercase'>free</span>}</span>
        </div>
      </main>
      <footer className='flex justify-between items-center mt-3'>
        <span className='uppercase font-medium text-accent-secondary text-sm'>Total</span>
        <span className='font-bold text-sm text-accent-secondary'>{showPriceWithCurrency(priceTotal)}</span>
      </footer>
    </aside>
  )
}

export default CartSummary