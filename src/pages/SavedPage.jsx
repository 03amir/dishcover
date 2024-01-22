import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../stores/cartSlice';
import { BsCartCheckFill } from 'react-icons/bs';

const SavedPage = () => {
  
  const savedMeals = useSelector((state) => state.cart.data);
  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(removeFromCart(id));
  }

  return (
    <div className='min-h-[48vh]'>
      <h1 className='w-3/5 m-auto font-bold text-3xl text-gray-500 mb-5 mt-5'>Saved Meals</h1>

      {savedMeals.length === 0 ? (
        <h2 className='w-3/5 m-auto text-3xl text-gray-500 text-center my-8'>You have no saved meals yet. Start adding delicious meals to your list!</h2>
      ) : (
        <div className='w-3/5 m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
          {savedMeals.map((mealItem) => {
            const { id, title, thumbnail } = mealItem;

            return (
              <div className='p-4 cursor-pointer shadow-lg overflow-hidden hover:shadow-lg transition duration-300 ease-in-out relative' key={id}>
                <Link to={`/meal/${id}`} className='relative'>
                  <img src={thumbnail} alt={title} className='rounded-md w-full h-40 object-cover transform hover:scale-105 transition duration-300 ease-in-out' />
                </Link>

                <div className='absolute top-2 right-2 p-2 cursor-pointer bg-orange-500 rounded-md' onClick={() => handleRemove(id)}>
                  <BsCartCheckFill className='text-2xl' />
                </div>

                <h2 className='font-semibold text-xl mt-3'>{title}</h2>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SavedPage;
