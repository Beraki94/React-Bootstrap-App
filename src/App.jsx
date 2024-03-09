
import Navigation from './component/Navigation'
import ProductCard from './component/ProductCard'

function App() {
  const generalStyles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "4rem",
      padding: "20px",
    }
  }
  return (
    <div>
      <Navigation />
      <h1>Get Started With Our Free Courses</h1>
      <div className='card' style={generalStyles.grid}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default App
