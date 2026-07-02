import React, { useEffect, useState } from "react";
import {
  Star,
  ShieldCheck,
  Truck,
  Package,
  BadgePercent,
  Tag,
  Box,
  Barcode,
  ShoppingCart,
} from "lucide-react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {

    const [product, setProduct] = useState({})
    const params = useParams()

    console.log(params.id);

    const apiCall = async () => {
        let response = await axios.get(`https://dummyjson.com/products/${params.id}`)
        console.log(response.data);

        setProduct(response.data)

        // setProducts(response.data.products)
        }

    useEffect(() => {
        apiCall()
    },[])

//   const [selectedImage, setSelectedImage] = useState(
//     product.images?.[0] || product.thumbnail
//   );

//   const discountedPrice = (
//     product.price -
//     (product.price * product.discountPercentage) / 100
//   ).toFixed(2);

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-5">

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-lg p-8">

          {/* Images */}
          <div>

            <div className="border rounded-2xl overflow-hidden bg-white">
              <img
                // src={selectedImage}
                src=""
                alt={product.title}
                className="w-full h-[500px] object-contain"
              />
            </div>

            <div className="flex gap-3 mt-5">
              {product.images?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                //   onClick={() => setSelectedImage(img)}
                  className={`w-24 h-24 object-cover rounded-xl border cursor-pointer transition
                  `}
                />
              ))}
            </div>

          </div>

          {/* Details */}

          <div>

            <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm">
              {product?.category}
            </span>

            <h1 className="text-4xl font-bold mt-4">
              {product?.title}
            </h1>

            <p className="text-gray-600 mt-5 leading-8">
              {product?.description}
            </p>

            {/* Rating */}

            <div className="flex items-center gap-3 mt-6">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map((item)=>(
                  <Star
                    key={item}
                    size={20}
                    fill={item<=Math.round(product.rating) ? "currentColor":"none"}
                  />
                ))}
              </div>

              <span className="font-semibold">
                {product.rating} Rating
              </span>
            </div>

            {/* Price */}

            <div className="mt-8 flex items-center gap-5">

              <h2 className="text-4xl font-bold text-green-600">
                {/* ${discountedPrice} */}
              </h2>

              <p className="line-through text-gray-400 text-xl">
                ${product?.price}
              </p>

              <span className="bg-red-500 text-white px-3 py-1 rounded-full">
                -{product?.discountPercentage}%
              </span>

            </div>

            {/* Stock */}

            <div className="mt-7 flex gap-4 flex-wrap">

              <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg">
                <Package size={18}/>
                {product?.availabilityStatus}
              </div>

              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                Stock : {product?.stock}
              </div>

            </div>

            {/* Buttons */}

            <div className="flex gap-4 mt-10">

              <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-4 rounded-xl flex items-center gap-3">
                <ShoppingCart size={20}/>
                Add to Cart
              </button>

              <button className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition px-8 py-4 rounded-xl">
                Buy Now
              </button>

            </div>

            {/* Extra Info */}

            <div className="grid md:grid-cols-2 gap-5 mt-12">

              <div className="border rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-blue-600"/>
                  <div>
                    <h3 className="font-semibold">
                      Warranty
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {product?.warrantyInformation}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl p-5">
                <div className="flex items-center gap-3">
                  <Truck className="text-green-600"/>
                  <div>
                    <h3 className="font-semibold">
                      Shipping
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {product?.shippingInformation}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Tags */}

            <div className="mt-10">

              <h2 className="font-semibold mb-3">
                Tags
              </h2>

              <div className="flex gap-3 flex-wrap">
                {product?.tags?.map((tag,index)=>(
                  <span
                    key={index}
                    className="bg-gray-200 px-4 py-2 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

            </div>

          </div>

        </div>

        {/* Specifications */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <h2 className="text-2xl font-bold mb-6">
            Product Specifications
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            <Spec title="Brand" value={product?.brand} />

            <Spec title="SKU" value={product?.sku} />

            <Spec title="Weight" value={`${product?.weight} g`} />

            <Spec
              title="Dimensions"
              value={`${product?.dimensions?.width} × ${product?.dimensions?.height} × ${product?.dimensions?.depth}`}
            />

            <Spec
              title="Minimum Order"
              value={product?.minimumOrderQuantity}
            />

            <Spec
              title="Barcode"
              value={product?.meta?.barcode}
            />

          </div>

        </div>

        {/* Reviews */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-10">

          <h2 className="text-2xl font-bold mb-8">
            Customer Reviews
          </h2>

          <div className="space-y-6">

            {product?.reviews?.map((review,index)=>(
              <div
                key={index}
                className="border rounded-xl p-5"
              >

                <div className="flex justify-between">

                  <div>

                    <h3 className="font-semibold">
                      {review?.reviewerName}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      {review?.reviewerEmail}
                    </p>

                  </div>

                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5]?.map((star)=>(
                      <Star
                        key={star}
                        size={18}
                        fill={star<=review?.rating ? "currentColor":"none"}
                      />
                    ))}
                  </div>

                </div>

                <p className="mt-4 text-gray-600">
                  {review?.comment}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

const Spec = ({ title, value }) => (
  <div className="border rounded-xl p-5">
    <p className="text-gray-500 text-sm">
      {title}
    </p>

    <h3 className="font-semibold mt-2">
      {value}
    </h3>
  </div>
);

export default ProductDetail;