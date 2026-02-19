import Header from "./components/Header/Header"
import SectionTitle from "./components/SectionTitle/SectionTitle"
import MovieCard from "./components/MovieCard/MovieCard"
import FoodCard from "./components/FoodCard/FoodCard"
import OtherCard from "./components/OtherCard/OtherCard"
import "./App.css"

function App() {
  return (
    <div className="app-wrapper">
      <Header />

      <div className="app-container">

        {/* ================= CARTELERA ================= */}
        <section className="section-container">
          <SectionTitle 
            title="Cartelera" 
            subtitle="Películas disponibles esta semana"
          />

          <div className="grid-container">
            <MovieCard
              title="Avengers: Endgame"
              genre="Acción / Ciencia ficción"
              year="2019"
              rating="PG-13"
              duration="3h 2m"
            />

            <MovieCard
              title="The Dark Knight"
              genre="Acción / Drama"
              year="2008"
              rating="PG-13"
              duration="2h 32m"
            />

            <MovieCard
              title="Spider-Man: No Way Home"
              genre="Acción / Fantasía"
              year="2021"
              rating="PG-13"
              duration="2h 28m"
            />

            <MovieCard
              title="Iron Man"
              genre="Acción / Ciencia ficción"
              year="2008"
              rating="PG-13"
              duration="2h 6m"
            />
          </div>
        </section>

        {/* ================= ALIMENTOS ================= */}
        <section className="section-container">
          <SectionTitle 
            title="Alimentos" 
            subtitle="Disfruta tu experiencia al máximo"
          />

          <div className="grid-container">
            <FoodCard
              name="Refresco Grande"
              category="Bebidas"
              price="89"
              description="Refresco de 1 litro con hielo."
            />

            <FoodCard
              name="Café Americano"
              category="Bebidas"
              price="65"
              description="Café recién preparado."
            />

            <FoodCard
              name="Palomitas Jumbo"
              category="Snacks"
              price="120"
              description="Palomitas tamaño jumbo con mantequilla."
            />

            <FoodCard
              name="Nachos con Queso"
              category="Comestibles"
              price="110"
              description="Totopos crujientes con queso caliente."
            />
          </div>
        </section>

        {/* ================= OTROS ================= */}
        <section className="section-container">
          <SectionTitle 
            title="Otros" 
            subtitle="Descubre más beneficios y promociones"
          />

          <div className="grid-container">
            <OtherCard
              title="Membresía Club Cinépolis"
              description="Acumula puntos y obtén beneficios exclusivos."
              label="Nuevo"
            />

            <OtherCard
              title="Preventas Exclusivas"
              description="Compra boletos antes que nadie."
            />

            <OtherCard
              title="Formatos Especiales IMAX"
              description="Vive la experiencia en pantalla gigante."
              label="Premium"
            />
          </div>
        </section>

      </div>
    </div>
  )
}

export default App
