import Product from '../components/ProductInStore'
import { useShoppingCartContext } from '../context/context'

export default function Store() {

     const { data, selectedData, handleChange } = useShoppingCartContext()

     const category_electronics = data.filter(
          item => item.category === 'electronics'
     )

     const category_jewelery = data.filter(
          item => item.category === 'jewelery'
     )

     const category_mensClothing = data.filter(
          item => item.category === "men's clothing"
     )

     const category_womensClothing = data.filter(
          item => item.category === "women's clothing"
     )

     return (
          <div>
               <fieldset className='mb-4'>
                    <label htmlFor='select-category'>Category - </label>
                    <select className='focus:outline-0' id='select-category' value={selectedData} onChange={(handleChange)}>
                         <option value="electronics">Electronics</option>
                         <option value="jewelery">Jewelery</option>
                         <option value="mensClothing">Men's Clothing</option>
                         <option value="womensClothing">Women's Clothing</option>
                    </select>

               </fieldset>
               <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                    {selectedData === 'electronics'
                         ? category_electronics.map(item => <Product key={item.id} {...item} />)
                         : selectedData === 'jewelery'
                              ? category_jewelery.map(item => <Product key={item.id} {...item} />)
                              : selectedData === 'mensClothing'
                                   ? category_mensClothing.map(item => <Product key={item.id} {...item} />)
                                   : category_womensClothing.map(item => <Product key={item.id} {...item} />)
                    }
               </div>
          </div>
     )
}
