import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import movies from './moviesData'; // Importing movies array from moviesData.js
import "./style.css";

const Homepage = ({ handleCategorySelect }) => {
  return (
    <div>
      <h1 style={{"textAlign":"center","color":"yellowgreen","font-size":"50px"}}>Movie Categories</h1>
      <p style={{"color":"white","textAlign":"center","fontStyle":"bold"}}>Please select one of the below movie category</p>
      <br></br>
      <div style={{"display":"flex","justifyContent":"center","gap":"20px"}}>


          <p  style={{"display":"flex","justifyContent":"center"}}>
            <button  style={{"padding":"15px 80px","backgroundColor":"white","border-radius":"10px","boxShadow":"10px 10px", "opacity":"0.8"}} onClick={() => handleCategorySelect('Drama')}><b style={{"font-size":"20px"}}>Drama</b></button>
          </p>

    
          <p  style={{"display":"flex","justifyContent":"center"}}>
            <button style={{"padding":"15px 80px","backgroundColor":"white","border-radius":"10px","boxShadow":"10px 10px","opacity":"0.8"}} onClick={() => handleCategorySelect('Crime')}><b style={{"font-size":"20px"}}>Crime</b></button>
           </p>


      </div>
      <div style={{"display":"flex","justifyContent":"center","gap":"20px"}}>


          <p  style={{"display":"flex","justifyContent":"center"}}>
            <button  style={{"padding":"15px 80px","backgroundColor":"white","border-radius":"10px","boxShadow":"10px 10px","opacity":"0.8"}} onClick={() => handleCategorySelect('Action')}><b style={{"font-size":"20px"}}>Action</b></button>
          </p>




           <p  style={{"display":"flex","justifyContent":"center"}}>
             <button  style={{"padding":"15px 80px","backgroundColor":"white","border-radius":"10px","boxShadow":"10px 10px","opacity":"0.8"}} onClick={() => handleCategorySelect('Horror')}><b style={{"font-size":"20px"}}>Horror</b></button>
          </p>


      </div>

      <div style={{"display":"flex","justifyContent":"center","gap":"20px"}}>


      <p  style={{"display":"flex","justifyContent":"center"}}>
        <button style={{"padding":"15px 80px","backgroundColor":"white","border-radius":"10px","boxShadow":"10px 10px","opacity":"0.8"}} onClick={() => handleCategorySelect('Comedy')}><b style={{"font-size":"17px"}}>Comedy</b></button>
      </p>


      <p  style={{"display":"flex","justifyContent":"center"}}>
        <button style={{"padding":"15px 80px","backgroundColor":"white","border-radius":"10px","boxShadow":"10px 10px","opacity":"0.8"}} onClick={() => handleCategorySelect('Mystery')}><b style={{"font-size":"17px"}}>Mystery</b></button>
      </p>


      </div>
      <div style={{"display":"flex","justifyContent":"center","gap":"20px"}}>
      <p  style={{"display":"flex","justifyContent":"center"}}>
        <button style={{"padding":"15px 80px","backgroundColor":"white","border-radius":"10px","boxShadow":"10px 10px","opacity":"0.8"}} onClick={() => handleCategorySelect('Fantasy')}><b style={{"font-size":"17px"}}>Fantasy</b></button>
      </p>



      <p  style={{"display":"flex","justifyContent":"center"}}>
        <button style={{"padding":"15px 80px","backgroundColor":"white","border-radius":"10px","boxShadow":"10px 10px","opacity":"0.8"}} onClick={() => handleCategorySelect('Fiction')}><b style={{"font-size":"17px"}}>Fiction</b></button>
      </p>
      </div>
    </div>
  );
};

const Movies = ({ category, handleCategorySelect }) => {
  const recommendedMovies = movies.filter(
    (movie) => movie.category === category
  );

  const goBack = () => {
    handleCategorySelect(null);
  };

  return (
    <div style={{"margin-top":"10px"}}>
      <h1 style={{"textAlign":"center","color":"yellowgreen","fontSize":"40px"}}>Recommended Movies for {category}</h1>
      <br>
      </br>
      {recommendedMovies.map((movie) => (
        <div style={{"display":"flex","justifyContent":"center","gap":"50px","margin-top":"20px"}} key={movie.id}>
          <div>
          <img style={{"border":"solid","borderColor":"white","margin-left":"10px","boxShadow":"10px 10px"}} src={movie.image} alt={movie.title} width="200px" height="200px"/>
          </div>
          <div style={{"padding":"2px","fontSize":"14px","color":"white","margin-right":"20px"}}>
          <p  style={{"margin-left":"10px"}}>Movie name : <b style={{"font-size":"20px"}}>{movie.title}</b></p>
          <p  style={{"margin-left":"10px"}}>Movie year : {movie.year}</p>
          <p  style={{"margin-left":"10px"}}>To get more info click the give link below</p>
          <button style={{"padding":"5px 20px","backgroundColor":"white","margin-left":"10px","border-radius":"5px"}}>
          <a  href={movie.link}><b>Link</b></a>
          </button>
          </div>
          <br></br>
          <br></br>
        </div>
      ))}
      <br></br>
      <br></br>
      <br></br>
      <div style={{"display":"flex","justifyContent":"center"}}>
      <button style={{"padding":"10px 30px","backgroundColor":"white","border-radius":"10px"}} onClick={goBack}><b>Go Back</b></button>
      </div>
      </div>
  );
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {selectedCategory ? (
        <Movies
          category={selectedCategory}
          handleCategorySelect={handleCategorySelect}
        />
      ) : (
        <Homepage handleCategorySelect={handleCategorySelect} />
      )}
    </div>
  );
};

export default App;
