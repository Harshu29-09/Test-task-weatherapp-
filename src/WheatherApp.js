// import React, { useState, useEffect } from 'react';
// import humidity from './Assets/humidity.png';
// import wind from './Assets/wind.png';

// const WeatherApp = () => {
//   const apiKey = "6de8226553b8ed7c3c37475a0aff6d51";
//   const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//   const [city, setCity] = useState('Indore');
//   const [error, setError] = useState(false);
//   const [weatherData, setWeatherData] = useState(null);
//   const [userInput, setUserInput] = useState('');
//   const [suggestions, setSuggestions] = useState([]);

//   const cities = [
//     "Mumbai", "Delhi", "Bangalore", "Kolkata", "Chennai",
//     "Hyderabad", "Ahmedabad", "Pune", "Surat", "Jaipur",
//     "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
//     "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara",
//     "Ghaziabad", "Ludhiana", "Agra", "Nashik", "Faridabad",
//     "Meerut", "Rajkot", "Kalyan-Dombivali", "Vasai-Virar", "Varanasi",
//     "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai",
//     "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur",
//     "Gwalior", "Vijayawada", "Jodhpur", "Madurai", "Raipur",
//     "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubballi-Dharwad"
// ]

//   const handleSearch = async () => {
//     try {
//       const response = await fetch(apiURL + city + `&appid=${apiKey}`);

//       if (response.status === 404) {
//         setError(true);
//         setWeatherData(null);
//       } else {
//         const data = await response.json();

//         if (data.main && data.weather && data.weather.length > 0) {
//           setWeatherData({
//             city: data.name,
//             temp: Math.round(data.main.temp),
//             humidity: data.main.humidity,
//             windSpeed: data.wind.speed,
//             weatherMain: data.weather[0].main,
//           });
//         } else {
//           setError(true);
//           setWeatherData(null);
//         }
//       }
//     } catch (error) {
//       setError(true);
//       setWeatherData(null);
//       console.error('Error fetching weather data:', error);
//     }
//   };

//   const handleInputChange = (event) => {
//   const input = event.target.value.trim().toLowerCase();
//   setUserInput(input);
//   setCity(event.target.value);

//   setSuggestions([]);

//   if (input) {
//     const inputWords = input.split(' ');

//     setTimeout(() => {
//       const filteredSuggestions = cities.filter((city) =>
//         inputWords.every((word) => city.toLowerCase().startsWith(word))
//       );

//       setSuggestions(filteredSuggestions);
//     }, 300);
//   }
// };
//   const handleSuggestionClick = (selectedCity) => {
//     setUserInput(selectedCity);
//     setCity(selectedCity);
//     setSuggestions([]);
//     handleSearch(); 
//   };

//   useEffect(() => {
//     handleSearch();
//   }, [city]); 

//   return (
//     <div className="card">
//       <div className="search">
//          <input
//         type="text"
//         id="search-input"
//         placeholder="Search for cities..."
//         value={city}
//         spellCheck={false}
//         onChange={handleInputChange}
//       />
//       </div>
//       <div className="suggestions-container">
//         {suggestions.length > 0 && (
//           <div>
//             {suggestions.map(city => (
//               <div
//                 key={city}
//                 className="suggestion"
//                 onClick={() => handleSuggestionClick(city)}
//               >
//                 {city}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       {error && (
//         <div className="error">
//           <p>Invalid city name</p>
//         </div>
//       )}
//       {weatherData && (
//         <div className="weather">
//           <h1 className="temp">{weatherData.temp}°C</h1>
//           <h2 className="city">{weatherData.city}</h2>
//           <div className="details">
//             <div className="col">
//               <img src={humidity} alt="" />
//               <div>
//                 <p className="humidity">{weatherData.humidity}%</p>
//                 <p>humidity</p>
//               </div>
//             </div>
//             <div className="col">
//               <img src={wind} alt="" />
//               <div>
//                 <p className="wind">{weatherData.windSpeed} km/h</p>
//                 <p>wind speed</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default WeatherApp;

