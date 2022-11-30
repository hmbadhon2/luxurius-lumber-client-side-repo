import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({category}) => {
    const {image, title,_id} = category;
    console.log(category)

    return (
        <div>
            <div className="card bg-base-100 shadow-xl image-full">
  <figure><img src={image} alt=" " /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
 
    <div className="card-actions justify-end">
        <Link to={`/categories/${_id}`} >  <button  className="btn btn-primary">Show All</button></Link>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default CategoriesCard;