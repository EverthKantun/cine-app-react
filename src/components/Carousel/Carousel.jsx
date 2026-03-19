import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

// Import local CSS and Swiper CSS
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Carousel.css';

import moviesData from '../../data/movies.json';

export function Carousel() {
  const navigate = useNavigate();

  // Seleccionamos3 películas como destacados (destacados mock)
  const featuredMovies = moviesData.slice(4, 7);

  const handleWatchDetails = (id) => {
    navigate(`/pelicula/${id}`);
  };

  return (
    <div className="carousel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="hero-swiper"
      >
        {featuredMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="swiper-slide-content">
              {/* Imagen de fondo */}
              <div
                className="swiper-slide-bg"
                style={{ backgroundImage: `url(${movie.image})` }}
              >
                <div className="swiper-overlay"></div>
              </div>

              {/* Contenido sobre la imagen */}
              <div className="swiper-info">
                <span className="swiper-badge">ESTRENO</span>
                <h2 className="swiper-title">{movie.title}</h2>
                <p className="swiper-desc">{movie.description}</p>
                <div className="swiper-actions">
                  <button
                    className="btn-primary"
                    onClick={() => handleWatchDetails(movie.id)}
                  >
                    Boletos Especiales
                  </button>
                  <button
                    className="btn-outline"
                    onClick={() => handleWatchDetails(movie.id)}
                  >
                    Ver Info
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
