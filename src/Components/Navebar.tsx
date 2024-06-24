import { useState } from "react"
import Login from "./Login"

type searchProp={
  setSearch:any
}

const Navebar = (props:searchProp) => {
  const [loginPop,setLoginPop]=useState(false)
  return (
    <>
     <div className="flex p-4 bg-slate-100 shadow-md">
      <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" fill-rule="evenodd" className="w-11 h-9"><path d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
      <div className="flex border-2 border-spacing-1 w-90 p-2 border-black ml-5 bg-white">
        <span>
        <svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" fill-rule="evenodd" className="w-6 h-5 mt-1"><path d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path></svg>
        </span>

        <input type="text" placeholder="Location" className="ml-3 outline-none" />

        <span>
        <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fill-rule="evenodd" className=" w-8 h-7 "><path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
        </span>
      </div>
      <div className="flex h-12 ml-4 border-2 border-black bg-white">
        <input onChange={(e)=>props?.setSearch(e.target.value)} placeholder="Find cars, mobiles & more.." className="ml-3 w-[900px] outline-none"/>
        <span className="p-3 bg-gray-400">
        <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon"  fill-rule="evenodd"><path d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z"></path></svg>
         </span>
      </div>
      <div className="flex h-12 p-3 ml-10 cursor-pointer">
        <h1 className="font-semibold">ENGLISH</h1>
        <span>
        <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" fill-rule="evenodd" className=" w-8 h-7 "><path d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
        </span>
      </div>
      <div onClick={()=>setLoginPop(!loginPop)} className="flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline">
      <h1 className="font-bold text-lg">Login</h1>
      </div>
      <div className="w-28 flex h-12 p-3 ml-6 cursor-pointer rounded-full border border-yellow-500">
      <h1 className="font-bold text-lg ml-3">+ SELL</h1>
      </div>
    </div>
    {loginPop && <Login setLoginPop={setLoginPop}/>}
    </>
   
  )
}

export default Navebar
