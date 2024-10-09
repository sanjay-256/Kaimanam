import React, { useContext } from 'react';
import { dataContext } from '../App';
import '../App.css';

const Product = ({ product }) => {
  const { data, setData } = useContext(dataContext);

  const submit = (item) => {
    setData([...data, item]);
  };

  const remove = (item) => {
    setData(data.filter((c) => c.id !== item.id));
  };

  return (
    <>
      {product.map((item) => (
        <div key={item.id} className="card bg-dark rounded-5 border-white border-3" style={{ width: '18rem' }}>
          <div className="row">
            <div className="col-8"></div>
            <div className="col-4" style={{ position: 'relative', top: '25px', left: '25px' }}>
              <i className="bi bi-bookmark-fill bg-white text-danger p-2 fs-5 rounded-pill"></i>
            </div>
          </div>
          <div className="mx-auto mb-1">
            <img
              src={item.imageUrl} // Corrected to use imageUrl
              alt="img"
              className='img-fluid'
              style={{ width: '180px', height: '180px', position: 'relative', top: '80px' }}
            />
          </div>
          <div className="card-body bg-white border border-bottom-0 border-2 border-dark text-center rounded-top-5 pt-5">
            <h5 className='card-title fs-3 pt-4'>{item.name}</h5>
            <div className="d-flex justify-content-between">
              <span className='fs-5 fw-bold d-flex'><i className="bi bi-currency-rupee"></i>{item.amount}</span>
              <span className='fs-5 fw-bold text-capitalize d-flex gap-1'><i className="bi bi-easel2-fill text-danger"></i>{item.category}</span>
              <span className='fs-5 fw-bold d-flex gap-1'><i className="bi bi-star-fill" style={{ color: 'gold' }}></i>{item.rating}</span>
            </div>
            <p className='mt-3 lh-md fw-medium'>{item.description}</p>
          </div>
          <div className="card-footer bg-white rounded-bottom-5 text-center border border-top-0 border-2 border-dark">
            {data.includes(item) ? (
              <button className='btn btn-dark' onClick={() => remove(item)}>
                <i className="bi bi-cart-plus pe-2 text-danger"></i>Remove from cart
              </button>
            ) : (
              <button className='btn btn-dark' onClick={() => submit(item)}>
                <i className="bi bi-cart-plus pe-2 text-info"></i>Add to cart
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;
