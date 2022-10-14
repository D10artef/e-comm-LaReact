import React, { useState, useEffect } from 'react'
import UserLayout from '../Layout/UserLayout'
import { Head } from '@inertiajs/inertia-react'
import { usePage } from '@inertiajs/inertia-react'
import OfferSlider from '../Components/Offer/OfferSlider'
import CategorySection from '../Components/Category/CategorySection'

const Home = () => {
  const {active_offers, categories} = usePage().props
  const [offersData, setOffersData] = useState([])
  const [categorieWithProductData, setCategorieWithProductData] = useState([])

  useEffect(() => {
    setOffersData(active_offers.data)
  }, [active_offers])

  useEffect(() => {
    setCategorieWithProductData(categories.data)
  }, [categories])

  return (
    <>
      <Head title='Home'/>
      <UserLayout>
        <div className='overflow-x-hidden'>
          <OfferSlider data={offersData}/>
        </div>
        <section>
          <div className="py-4 px-12 flex my-4 justify-center font-bold">
            <h1 className="lg:text-3xl md:text-2xl text-xl pb-2 border-b-2 text-primary border-accent-secondary">Latest items</h1>
          </div>
          {
          categorieWithProductData.length > 0 && categorieWithProductData.map((item, index) => {
            let reverse = false
            if(index%2 === 0){
              reverse = true
            }
            return (
              <CategorySection key={item.id} title={item.name} id={item.id} description={item.description} data={item.products} reverse={reverse}/>)
          })
        }
        </section>
      </UserLayout>
    </>
  )
}

export default Home