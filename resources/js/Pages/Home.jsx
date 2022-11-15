import React, { useState, useEffect } from 'react'
import UserLayout from '../Layout/UserLayout'
import { Head } from '@inertiajs/inertia-react'
import { usePage } from '@inertiajs/inertia-react'
import CategorySection from '../Components/Home/Category/CategorySection'
import OfferSection from '../Components/Home/Offer/OfferSection'
import HomeSection from '../Components/Home/HomeSection'
import ProductsSlider from '../Components/Home/Product/ProductsSlider'

const Home = () => {
  const {active_offers, categories, flash_deal} = usePage().props
  const [offersData, setOffersData] = useState([])
  const [categorieWithProductData, setCategorieWithProductData] = useState([])
  const [flashDealData, setFlashDealData] = useState([])

  useEffect(() => {
    setOffersData(active_offers.data)
  }, [active_offers])

  useEffect(() => {
    setCategorieWithProductData(categories.data)
  }, [categories])

  useEffect(() => {
    setFlashDealData(flash_deal.data)
  }, [flash_deal])

  return (
    <>
      <Head title='Home'/>
      <UserLayout>
        <OfferSection data={offersData} />
        <HomeSection title="Flash deals" icon="lightning-bolt" color='accent-secondary'>
          <ProductsSlider data={flashDealData}/>
        </HomeSection>
        {/* <HomeSection title="Best sealer" icon="color-swatch" color='accent'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate doloremque labore inventore animi, dolor porro? Velit officia in veniam eveniet, atque hic cum! Praesentium debitis, libero harum commodi suscipit unde?
          </p>
        </HomeSection> */}
        <HomeSection title="Newest items" icon='sparkles' color='accent-secondary'>
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
        </HomeSection>
      </UserLayout>
    </>
  )
}

export default Home