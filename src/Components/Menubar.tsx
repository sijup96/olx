
type menuProp = {
    setMenu: any
}
const Menubar = (props: menuProp) => {
    return (
        <div className="flex shadow-sm h-10 p-2">
            <h1 onClick={() => props?.setMenu('Shirt')} className="ml-48 cursor-pointer">Shirt</h1>
            <h1 onClick={() => props?.setMenu('Jacket')} className="ml-5 cursor-pointer">Jacket</h1>
            <h1 onClick={() => props?.setMenu('Laptops')} className="ml-5 cursor-pointer">Laptops</h1>
            <h1 onClick={() => props?.setMenu('Gold')} className="ml-5 cursor-pointer">Gold</h1>
            <h1 onClick={() => props?.setMenu('Monitor')} className="ml-5 cursor-pointer">Monitor</h1>
            <h1 onClick={() => props?.setMenu('Bike')} className="ml-5 cursor-pointer">Bike</h1>
            <h1 onClick={() => props?.setMenu('SSD')} className="ml-5 cursor-pointer">SSD</h1>
        </div>
    )
}

export default Menubar
