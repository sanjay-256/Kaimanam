import React, { useState, useEffect } from 'react';
import { database } from '../firebaseConfig'; // Import your Firebase configuration
import { ref, onValue } from 'firebase/database'; // Import required functions
import Product from './Product';

const Order = () => {
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [snack, setSnack] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [prepare, setPrepare] = useState('');
  const [products, setProducts] = useState([]); // State to hold products
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  // Fetch products from Firebase
  useEffect(() => {
    const fetchProducts = () => {
      const cartRef = ref(database, 'cart'); // Reference to the 'cart' node
      onValue(cartRef, (snapshot) => {
        const data = snapshot.val(); // Get the data from the snapshot
        if (data) {
          const productsArray = Object.entries(data).map(([id, value]) => ({
            id,
            ...value,
          }));
          setProducts(productsArray);
        } else {
          setProducts([]); // Set to an empty array if no data
        }
        setLoading(false); // Set loading to false after fetching
      }, (error) => {
        console.error('Error fetching products:', error);
        setError('Failed to load products'); // Set error message
        setLoading(false); // Set loading to false in case of an error
      });
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const checkTime = () => {
      const date = new Date();
      const hour = date.getHours();
      const min = date.getMinutes();

      // Your existing time check logic here...
      if ((hour === 6 && min < 45)){
        setBreakfast(false);
        setLunch(false);
        setSnack(false);
        setDinner(false);
        setPrepare("The food is being prepared, please come back at 6:45pm");
      } else if ((hour === 6 && min >= 45) || (hour === 7) || (hour === 8) || (hour === 9) || (hour === 10)) {
        setBreakfast(true);
        setLunch(false);
        setSnack(false);
        setDinner(false);
        setPrepare("");
      } else if ((hour === 11) || (hour === 12 && min < 29)){
        setBreakfast(false);
        setLunch(false);
        setSnack(false);
        setDinner(false);
        setPrepare("The food is being prepared, please come back at 12:30pm");
      } else if ((hour === 12 && min >= 29) || (hour === 13) || (hour === 14)) {
        setBreakfast(false);
        setLunch(true);
        setSnack(false);
        setDinner(false);
        setPrepare("");
      } else if ((hour === 15) || (hour === 16 && min < 29)){
        setBreakfast(false);
        setLunch(false);
        setSnack(false);
        setDinner(false);
        setPrepare("The food is being prepared, please come back at 4:30pm");
      } else if ((hour === 16 && min >= 29) || (hour === 17)) {
        setBreakfast(false);
        setLunch(false);
        setSnack(true);
        setDinner(false);
        setPrepare("");
      } else if ((hour === 18) || (hour === 19 && min < 9)){
        setBreakfast(false);
        setLunch(false);
        setSnack(false);
        setDinner(false);
        setPrepare("The food is being prepared, please come back at 7:10pm");
      } else if ((hour === 19 && min >= 9) || (hour === 20) || (hour === 21)) {
        setBreakfast(false);
        setLunch(false);
        setSnack(false);
        setDinner(true);
        setPrepare("");
      } else if (hour >= 22){
        setBreakfast(false);
        setLunch(false);
        setSnack(false);
        setDinner(false);
        setPrepare("Please come back tomorrow at 6:45am");
      } else {
        setBreakfast(false);
        setLunch(false);
        setSnack(false);
        setDinner(false);
      }
    };

    checkTime();
    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const category = breakfast ? "breakfast" : lunch ? "lunch" : snack ? "snack" : dinner ? "dinner" : null;
  const product = category ? products.filter(item => item.category === category) : [];

  return (
    <div className="container-fluid bg-warning-subtle">
      <div className="container py-5">
        {prepare && <div className='text-center fs-5 fw-semibold py-3'>{prepare}</div>}
        <div className="d-flex flex-wrap column-gap-4 row-gap-5 justify-content-center">
          {prepare && <div className="w-50 text-center"><img src="preparing.gif" alt="preparing" className='img-fluid' style={{ maxHeight: '540px' }} /></div>}
          {loading ? (
            <div className='text-center'>Loading products...</div>
          ) : error ? (
            <div className='text-center text-danger'>{error}</div>
          ) : (
            <Product product={product} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
