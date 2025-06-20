import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext"
import { categories } from "../assets/assets";
import Card from "../components/Card";

export const ProductCategories = () => {
    const { products } = useAppContext();
    const { category } = useParams();

    const searchCategory = categories.find((item) => item.path.toLowerCase() === category)
    const filteredProducts = products.filter((product) => product.category.toLowerCase() === category)
  return (
    <div className="mt-16">
        {searchCategory && (
            <div className="flex flex-col items-end w-max">
                <p className="text-2xl font-medium">{searchCategory.text.toUpperCase()}</p>
                <div className="w-16 h-0.5 bg-primary rounded-full"></div>
            </div>
        )}
        {filteredProducts.length > 0 ? (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5">
                {filteredProducts.map((product)=> (
            <Card key={product._id} product={product}/>
        ))}
            </div>
        ):(
            <div className="flex items-center justify-center h-[60vh]">
                <p className="text-2xl font-medium text-primary">No Product found in this category.</p>
            </div>
        )}
    </div>
  )
}
export default ProductCategories