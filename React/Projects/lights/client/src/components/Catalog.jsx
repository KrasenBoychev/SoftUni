import './css/Catalog.css';
import { getLights } from '../../api/data';
import { useEffect, useState } from 'react';

export default function Catalog() {

  const [lights, setLights] = useState([]);

  useEffect(() => {
    async function getAllLights() {
      const allLights = await getLights();
      setLights(allLights);
    }
      
    getAllLights();
  }, []);

  return (
    <div className="catalog_section">
        <h1>Catalog</h1>

        <div className='items-container'>
          {lights.length > 0  
              ? lights.map(light => 
                    <div key={light._id} className="item-wrapper" >
                    <div className="container_main">
                      <img src="images/img-2.png" />
                      <div className="overlay">
                        <a href="#" className="icon" title="User Profile">
                          <i className="fa fa-search"></i>
                        </a>
                      </div>
                    </div>
                    <p className="item-name">{light.name}</p>
                    <p className="item-price">{light.price}lv.</p>
                  </div>
                )
              : <p>There are no lights available at the moment</p>
          }
        </div>
    </div>
  );
}
