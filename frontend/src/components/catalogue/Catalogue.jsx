import "./Catalogue.css"
import {useFetch} from "./useFetch";
import {useState} from "react";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import {Link} from "react-router-dom";

function Catalogue() {
    const {data} = useFetch ("https://localhost:8080/product");
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = data?.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div className = "bodyContainer">
    <div className = "searchContainer">
      <input
       className= "searchInput"
       type="search"
       placeholder= "Buscar..."
       onChange= {(e) => setSearchTerm(e.target.value)}
      />
      <span className= "searchIcon">
        <LocalMallOutlinedIcon/>
    </span>
</div>
<div className ="catalogueContainer">
    <section className="bannerContainer">
        <div className = "banner">
            <div className =" banner.b">
                <h2>¡Cuerpo sano, mente sana!</h2>
        </div>
        </div>

        <div className= "products">
            {filteredData?.map((product) =>(
                <div key= {product.id}> <Link to= {`/frontend/src/components/catalogue/Catalogue.jsx/&product.id}`}>
                    <section className= "containerImg">
                        <img src={product.img} alt={product.name}></img>

                    </section>
                </Link>
        </div>
            ))}
            </div>

            </section>
            </div>
            </div>

  );
}

export default Catalogue;