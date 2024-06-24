import { useEffect, useState } from "react"
import Menubar from "./Menubar"
import Navebar from "./Navebar"
import Home from "./Home"
import Footer from "./Footer"

const Main = () => {
    const [procuct, setProduct] = useState([])
    const [search, setSearch] = useState('')
    const [menu,setMenu]=useState('')
     
    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProduct(json))
    }
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
            <Navebar setSearch={setSearch}/>
            <Menubar setMenu={setMenu}/>
            <Home products={procuct} search={search} menu={menu} />
            <Footer />
        </div>
    )
}

export default Main
