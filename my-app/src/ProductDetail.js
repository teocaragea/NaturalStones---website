import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header.js';
import TopBar from './TopBar.js';
import Footer from './Footer.js';
import Loader from 'react-spinners/CircleLoader';
import image from './assets/img/zodiac.jpeg';

function ProductDetail()  {
    const { product } = useLocation().state;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <>
         {loading ? (
                <div className="Loader">
                <Loader
                    size={50}
                    color={"#123abc"}
                    loading={loading}
                />
                <p className="Loader-text">Pietrele isi incarca energia</p>
            </div>
            ) : (
   <>         
        <TopBar/>
        <Header/>
        {console.log(product)}
        <div className="grid-container">
  <div className="image-column">
    <img src={image} alt={"img"} className="img-fluid" />
  </div>
  <div className="text-column">
    <h1>{product.name}</h1>
    <p>Text 2</p>
    <p>Text 3</p>
  </div>
</div>

        <Footer/>
        </>
            )}
        </>
    );
}
export default ProductDetail;