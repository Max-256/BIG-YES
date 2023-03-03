import { Link } from 'react-router-dom';

const GoodsContainer = ({goods}) => {
    return (
        <div className='market grid grid-1x2 grid-1x3 grid-1x4'>
            {goods.map(good =>
            <div key={good._id}>
            <Link  to={`/good-details/${good._id}`} className='card m-2'>
               <img src={good.image} alt="" />
               <div className='card-body'>
               <span className='good-title'>{good.good}</span>
               <span className='badge bg-primary'>UGX.{good.price}</span> 
               </div>                
            </Link>
            </div>
            )}
        </div>
    );
};

export default GoodsContainer;