import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Perfect Stay</h1>
        <p>Book hotels at the best prices across India.</p>

        <div className="search-box">
          <input type="text" placeholder="Enter City" />
          <label>Check In</label>
<input type="date" />

<label>Check Out</label>
<input type="date" />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;