import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import { AuthContext } from '../../../Context/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
   
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()
    const time = new Date().toLocaleTimeString();
    const {data:Categories=[]} = useQuery({
        queryKey:['Categories'],
        queryFn: ()=> fetch('https://luxurious-lumber-server.vercel.app/categories')
        .then(res => res.json())
        .then(data => {
          console.log(data)
          return data;
        })
      
      })

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddProduct = data => {
      // console.log(data.name, data.originalPrice, data.reSellPrice, data.usesYear, data.category,data.location,data.productType, data.phone,data.purchaseYear, data.productDescription  )
      
      const image = data.image[0]
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imageHostingKey}`
      fetch(url, {
        method:'POST',
        body:formData
      })
      .then(res => res.json())
      .then(photoData => {
        console.log(photoData.data.url)

        if(photoData.success){
          const product = {
            name:data.name,
            originalPrice:data.originalPrice,
            sellPrice:data.reSellPrice,
            uses:data.usesYear,
            category:data.category._id,
            location:data.location,
            productType:data.ProductType,
            sellerPhone:data.phone,
            sellerName:data.sellerName,
            BuyingYear:data.purchaseYear,
            description:data.productDescription,
            image:photoData.data.url,
            time:time,
            email:user?.email
           }

           console.log(product)

           fetch(`https://luxurious-lumber-server.vercel.app/products?email=${user?.email}`,{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(product)
           })
           .then(res => res.json())
           .then(res =>{
            console.log(res)
            toast.success(`${data.name} is added Successfully`)
            navigate('/dashboard/myProduct')

           })
        }
      })


    } 
    
  
 
    return (
      <div className='flex justify-center items-center pt-8'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Add Your Product</h1>
         
        </div>
        <form
          onSubmit={handleSubmit(handleAddProduct)}
       
          className='space-y-12 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='name' className='block mb-2 text-sm'>
               Product Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
               
                {...register ("name",{
                    required:"Name is required"
                   })}
              
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
               {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
           
           <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>

           <div>
              <label htmlFor='originalPrice' className='block mb-2 text-sm'>
                Original Price
              </label>
              <input
                 {...register ("originalPrice",{
                    required:"Original Price is required"
                   })}
                type='text'
                name='originalPrice'
                id='originalPrice'
                placeholder='Original Price'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
               {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
            </div>
            <div>
              <label htmlFor='reSellPrice' className='block mb-2 text-sm'>
                Re-sell Price
              </label>
              <input
                 {...register ("reSellPrice",{
                    required:"Re-sell Price is required"
                   })}
                type='text'
                name='reSellPrice'
                id='reSellPrice'
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
               {errors.reSellPrice && <p className='text-red-500'>{errors.reSellPrice.message}</p>}
            </div>
            <div>
              <label htmlFor='usesYear' className='block mb-2 text-sm'>
                Use of Years
              </label>
              <input
                 {...register ("usesYear",{
                    required:"Re-sell Price is required"
                   })}
                type='text'
                name='usesYear'
                id='usesYear'
                placeholder='Years of use'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
               {errors.usesYear && <p className='text-red-500'>{errors.usesYear.message}</p>}
            </div>
           </div>
      
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
            <div>
                <div className='flex justify-between mb-2'>
                  <label htmlFor='category' className='text-sm'>
                    Product Category
                  </label>
                </div>
                <select 
                {...register ("category._id",{
                  required:'category is required'
                })}
                className="select px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-primary text-gray-900 w-full ">
                  {
                    Categories.map(category => <option
                      key={category._id} 
                     value={category._id} selected> {category.title}</option>)
                  }
                  
              </select>
              {errors.category && <p className='text-red-500'>{errors.category.message}</p>}
              
              </div>
              <div>
                <div className='flex justify-between mb-2'>
                  <label htmlFor='password' className='text-sm'>
                    Product Location
                  </label>
                </div>
                <select 
                {...register ("location",{
                  required:'location is required'
                })}
                className="select px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-primary text-gray-900 w-full ">
                  <option value="1" selected> Dhaka</option>
                  <option >Chittagong</option>
                  <option >Sylhet</option>
                  <option >Barishal</option>
                  <option >Rangpur</option>
                  <option >Khulna</option>
              </select>
              {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
              </div>
              <div>
                <div className='flex justify-between mb-2'>
                  <label htmlFor='password' className='text-sm'>
                    Product Type
                  </label>
                </div>
                <select 
                {...register ("productType")}
                className="select px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:outline-primary text-gray-900 w-full ">
                  <option value="1"  selected> Excellent</option>
                  <option value="2" >Good</option>
                  <option value="3">Fair</option>
                 
              </select>
              
              </div>

        </div>

         <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
         <div>
              <label htmlFor='phone' className='block mb-2 text-sm'>
               Your Phone
              </label>
              <input
                type='text'
                name='phone'
                id='phone'
               
                {...register ("phone",{
                    required:"Phone"
                   })}
              
                placeholder=' Phone '
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
               {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
            </div>
          <div>
              <label htmlFor='purchaseYear' className='block mb-2 text-sm'>
               Purchase Year
              </label>
              <input
                type='text'
                name='purchaseYear'
                id='purchaseYear'
               
                {...register ("purchaseYear",{
                    required:"Purchase Year is required"
                   })}
              
                placeholder='Purchase Year'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
               {errors.purchaseYear && <p className='text-red-500'>{errors.purchaseYear.message}</p>}
            </div>
          <div>
              <label htmlFor='sellerName' className='block mb-2 text-sm'>
               Your Name
              </label>
              <input
                type='text'
                name='sellerName'
                id='sellerName'
               
                {...register ("sellerName",{
                    required:"Seller name is required"
                   })}
              
                placeholder='Your Name'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
               {errors.sellerName && <p className='text-red-500'>{errors.sellerName.message}</p>}
            </div>
            
         </div>

          <div>
                   
          <div className='flex justify-between mb-2'>
                  <label htmlFor='description' className='text-sm'>
                    Product Description
                  </label>
                </div>

          <textarea
          {...register ("productDescription")}
           className="textarea textarea-bordered w-full" placeholder="Please Add Your Product Description"></textarea>
          </div>

          <div>
              <label htmlFor='image' className='block mb-2 text-sm w-full'>
                Select Image:
              </label>
              <input
                {...register("image",{
                  required:'Photo is required'
                })}
                type='file'
                id='image'
                accept='image/*'
                
              />
            </div>
        
          </div>
          <div className='space-y-2'>
            <div>
              <PrimaryButton
                type='submit'
                classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
              >
                Add Product
              </PrimaryButton>
            </div>
           

          </div>
        </form>
   

      </div>
    </div>
    );
};

export default AddProduct;