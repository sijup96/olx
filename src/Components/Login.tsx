import guitar from '../assets/guitar.webp'
import google from '../assets/google.png'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../firebase/setup'


type popupProp={
    setLoginPop:any
}
const Login = (props:popupProp) => {

    const googleSignIn = async () => {
        try {
            await signInWithPopup(auth, googleProvider)

        } catch (error) {
            console.error(error);

        }
    }
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-zinc-950 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-96 sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <h1 onClick={()=>props?.setLoginPop(false)} className='text-end text-xl cursor-pointer'>X</h1>
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <div className="mt-2">
                                        <img src={guitar} alt="guitar" className='w-20 h-20 ml-32' />
                                        <p className="text-base font-medium text-center">Help us become one of the safest places <br />to buy and sell</p>
                                        <div className='flex border-2 border-black p-2 rounded-md mt-12 cursor-pointer'>
                                            <svg width="22px" height="22px" viewBox="0 0 1024 1024" data-aut-id="icon" fill-rule="evenodd" className='w-6 h-6 '><path d="M743.68 85.333l66.987 67.84v701.227l-63.573 84.267h-471.253l-62.507-85.333v-700.373l67.627-67.627h462.72zM708.053 170.667h-391.893l-17.493 17.707v637.653l20.053 27.307h385.92l21.333-27.52v-637.653l-17.92-17.493zM512 682.667c23.564 0 42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667c-23.564 0-42.667-19.103-42.667-42.667s19.103-42.667 42.667-42.667z"></path></svg>
                                            <h1 className='font-semibold ml-3 cursor-pointer'>Continue with phone</h1>
                                        </div>
                                        <div onClick={googleSignIn} className='flex border border-gray-300 p-2 rounded-md mt-4'>
                                            <img src={google} alt="google" className='w-6 h-6' />
                                            <h1 className='font-semibold ml-12 text-gray-500 cursor-pointer'>Continue with Google</h1>
                                        </div>
                                        <h1 className='text-center mt-4'>OR</h1>
                                        <h1 className='text-center mt-4 underline cursor-pointer'>Login with Email</h1>
                                        <h1 className='text-center mt-28 text-xs'>All your personal details are safe with us.</h1>
                                        <h1 className='text-center mt-4 text-xs'>If you continue, you are accepting <span className='text-blue-600'> OLX Terms and <br />Conditions and Privacy Policy</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
