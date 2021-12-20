import logo from './logo.svg';
import './App.css';

function App() {
  const productDetails = {
    title: 'FitBit 19 - The Smartest Watch',
    description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
    colorOptions: [
        {
            styleName: 'Black Strap',
            imageUrl: 'https://imgur.com/iOeUBV7.png'
        },
        {
            styleName: 'Red Strap',
            imageUrl: 'https://imgur.com/PTgQlim.png'
        },
        {
            styleName: 'Blue Strap',
            imageUrl: 'https://imgur.com/Mplj1YR.png'
        },
        {
            styleName: 'Purple Strap',
            imageUrl: 'https://imgur.com/xSIK4M8.png'
        },
    ],
    featureList: [
        "Time", "Heart Rate"
    ]
};

const colorOptions = productDetails.colorOptions.map( c => {
 return (
  <span className="ImgVariant">
    <img className="ProductSample" src={c.imageUrl} alt="sample" />
  </span>
 )
})

  return (
    <div className="App">
      <div className="MainImgContainer">
        <img src="https://imgur.com/iOeUBV7.png" alt="strap" className="MainImg" />
      </div>
      <div className="ProductInfo">
         <div>
        <h2>{productDetails.title}</h2>
        <p>{productDetails.description}</p>
      </div>
      <div className="ProductAttribute">
        <h5>Select Color</h5>

        <div className="Variant">
          {colorOptions}
        </div>

        <div>
          <h5>Features</h5>
          <button className="TimeBtn Btn">Time</button> <button className="HeartRateBtn Btn">Heart Rate</button>
        </div>
        <button className="BuyNowBtn Btn">Buy Now</button>
      </div>
      </div>
     
    </div>
  );
}

export default App;


// const ProductData = {
//   title: 'FitBit 19 - The Smartest Watch',
//   description: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.',
//   colorOptions: [
//       {
//           styleName: 'Black Strap',
//           imageUrl: 'https://imgur.com/iOeUBV7.png'
//       },
//       {
//           styleName: 'Red Strap',
//           imageUrl: 'https://imgur.com/PTgQlim.png'
//       },
//       {
//           styleName: 'Blue Strap',
//           imageUrl: 'https://imgur.com/Mplj1YR.png'
//       },
//       {
//           styleName: 'Purple Strap',
//           imageUrl: 'https://imgur.com/xSIK4M8.png'
//       },
//   ],
//   featureList: [
//       "Time", "Heart Rate"
//   ]
// }

// Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

// export default ProductData;