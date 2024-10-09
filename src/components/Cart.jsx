import React, { useContext, useEffect, useState } from 'react';
import { dataContext } from '../App';

const Cart = () => {
  const { data, setData } = useContext(dataContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate the total based on the current cart items
    const totalAmount = data.reduce((acc, curr) => acc + curr.amount * curr.count, 0);
    setTotal(totalAmount);
  }, [data]);

  const increaseCount = (id) => {
    const updatedData = data.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setData(updatedData);
  };

  const decreaseCount = (id) => {
    const updatedData = data.map(item =>
      item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
    );
    setData(updatedData);
  };

  const removeItem = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };

  const clear = () => {
    setData([]);
  };

  const getdata = async (e) => {
    if (data.length === 0) {
      alert("Select your food before placing an order");
      return;
    }
    e.preventDefault();

    // Create a filtered array with only the required fields
    const filteredData = data.map(item => ({
      id: item.id,
      name: item.name,
      count: item.count,
      rate: item.amount,
    }));

    const payload = {
      items: filteredData,
      total: total
    };

    try {
      const response = await fetch('https://place-order-36d51-default-rtdb.firebaseio.com/UserData.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload) // Send the payload including filtered data and total
      });

      if (response.ok) {
        alert('Order placed successfully');
        setData([]); // Clear cart after successful order
      } else {
        alert('Error placing order');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while placing your order');
    }
  };

  return (
    <>
      {data.length <= 0 ? (
        <div className='text-center mt-5'>
          <img className='img-fluid' src="nothing.png" alt="No items in cart" />
        </div>
      ) : (
        <div>
          <button className='btn btn-outline-success border-2 fw-semibold ms-5 my-5' onClick={clear}>Clear Cart</button>
          <div className='d-flex flex-wrap gap-5 px-5 pb-5 justify-content-between container'>
            {data.map((item) => (
              <div className="card mb-3 mx-auto" style={{ maxWidth: '540px' }} key={item.id}>
                <div className="row gx-0">
                  <div className="col-md-5 my-auto text-center">
                    <img src={item.imageUrl} className="img-fluid" style={{ width: '200px', height: '200px' }} alt={item.name} />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <div className='d-flex flex-wrap'>
                        <p className="card-text fs-5 text-muted fw-medium">Rate: ₹{item.amount}</p>
                        <div className='mx-auto'>
                          <ul className='d-flex gap-2 me-4 list-unstyled'>
                            <li
                              className='fs-5 fw-bold border border-2 border-end-0 rounded-2 border-warning px-2'
                              style={{ cursor: 'pointer' }}
                              onClick={() => decreaseCount(item.id)}
                            >
                              -
                            </li>
                            <li
                              className='fs-5 fw-medium border border-2 border-end-0 border-start-0 border-warning px-2'
                            >
                              {item.count}
                            </li>
                            <li
                              className='fs-5 fw-bold border border-2 rounded-2 border-start-0 border-warning px-2'
                              style={{ cursor: 'pointer' }}
                              onClick={() => increaseCount(item.id)}
                            >
                              +
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p className="card-text">{item.description}</p>
                      <div className='text-end'>
                        <button
                          className='btn btn-outline-danger border-2 fw-medium'
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className='text-center fst-italic'>
        <h2 className='pb-5'>Total: ₹{total}</h2>
        <button className='btn btn-outline-success border-2 fw-semibold mb-5' onClick={getdata}>Place Order</button>
      </div>
    </>
  );
};

export default Cart;
