import { useEffect, useState } from "react";
import "./HotelList.css";

function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("https://demohotelsapi.pythonanywhere.com/hotels/")
      .then((response) => response.json())
      .then((result) => {
        setHotels(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredHotels = hotels
    .filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(search.toLowerCase()) ||
        hotel.location.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "low") {
        return Number(a.price) - Number(b.price);
      }
      if (sortOrder === "high") {
        return Number(b.price) - Number(a.price);
      }
      return 0;
    });

  return (
    <div className="hotel-container">
      <h2>Available Hotels</h2>

      <input
        type="text"
        placeholder="Search by hotel name or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="sort-box"
      >
        <option value="">Sort By</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>

      <div className="hotel-grid">
        {filteredHotels.map((hotel) => (
          <div className="hotel-card" key={hotel.id}>
            <img src={hotel.thumbnail} alt={hotel.name} />

            <div className="hotel-info">
              <h3>{hotel.name}</h3>

              <p>📍 {hotel.location}</p>

              <p>⭐ {hotel.rating}</p>

              <p>💰 ₹{hotel.price}</p>

              <p>{hotel.description.substring(0, 100)}...</p>

              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HotelList;