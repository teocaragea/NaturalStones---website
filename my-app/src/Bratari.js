import React, {useState, useEffect} from 'react';
import Header from './Header.js';
import TopBar from './TopBar.js';
import ProductList from './ProductList.js';
import Select from 'react-select';
import Footer from './Footer.js';
import Loader from 'react-spinners/CircleLoader';
const astroSigns = [    {value: "Aries", label: "Berbec"},     {value: "Taurus", label: "Taur"},     {value: "Gemini", label: "Gemeni"},     {value: "Cancer", label: "Rac"},     {value: "Leo", label: "Leu"},     {value: "Virgo", label: "Fecioară"},     {value: "Libra", label: "Balanță"},     {value: "Scorpio", label: "Scorpion"},     {value: "Sagittarius", label: "Săgetător"},     {value: "Capricorn", label: "Capricorn"},     {value: "Aquarius", label: "Vărsător"},     {value: "Pisces", label: "Pești"}, {value: "All", label:"Toate zodiile"}];
const products = [
    {
        id: 1,
        name: "Bratara Ametist 6mm",
        price: "40",
        signs: "All,Aries",
        dim: 6
      },
      {
        id: 2,
        name: "Bratara Cuart Roz 8mm",
        price: "60",
        signs: "All,Aries",
        dim: 8
      },
      {
        id: 3,
        name: "Bratara Malachit 8mm",
        price: "35",
        signs: "All,Taurus",
        dim: 8
      },
      {
        id: 4,
        name: "Bratara Turcoaz 8mm cu pandantiv",
        price: "50",
        signs: "All,Libra",
        dim: 8
      }
     /* {
        id: 5,
        name: "Emerald",
        price: "70",
        signs: "All,Cancer",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      },
      {
        id: 6,
        name: "Turquoise",
        price: "25",
        signs: "All,Aries,Taurus",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      },
      {
        id: 7,
        name: "Piatra Soarelui",
        price: "12",
        signs: "Aries,Libra,Scorpio,All",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      },
      {
        id: 8,
        name: "Piatra Lunii",
        price: "30",
        signs: "All,Aries",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      },
      {
        id: 9,
        name: "Onyx",
        price: "25",
        signs: "All,Virgo,Pisces,Leo",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
      }*/
  ];

export default function ProduseShop(){

    const [searchTerm, setSearchTerm] = useState('');
    const [filterOption, setFilterOption] = useState('name');
    const [selectedOption, setSelectedOption] = useState(astroSigns[12]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
  
    const handleSearch = event => {
        setSearchTerm(event.target.value);
      }

      const [originalProducts] = useState([...products])
      let filteredProducts = [...originalProducts];

    switch (filterOption) {
      case 'high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'name':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
      break;
    }

    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
      }
      
    filteredProducts = filteredProducts.filter(product => product.signs.includes(selectedOption.value)) 

      
    return(
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
     <main class="main-product">
     <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-12">
        <input type="text" class="search-input" placeholder="Caută după nume" onChange={handleSearch}/>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
        <label htmlFor="filter-select">Sorteaza:</label>
        <select id="filter-select" class="filter-select" value={filterOption} onChange={(e) => setFilterOption(e.target.value)}>
          <option value="name">Alfabetic după nume</option>
          <option value="high">Cel mai mare preț</option>
          <option value="low">Cel mai mic preț</option>
        </select>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12">
        <label htmlFor="select-component">Alege zodia:</label>
        <Select className="filter-signs" options={astroSigns} onChange={handleChange} value={selectedOption} defaultValue={astroSigns[12].value, astroSigns[12].label} id="select-component"/>
        </div>
     </div>
     </main>
     <ProductList products={filteredProducts} className="product-list"/>
     <Footer/>
     </>
            )}
        </>
    );
}