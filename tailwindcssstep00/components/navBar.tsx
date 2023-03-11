import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
    return (
        <div className="flex justify-center bg-gray-50">
            <div className="mx-4 order-start self-center">
                <Image src="/fullLogo.png" width={120} height={120} alt='music' />
            </div>
            <div className='mx-4 self-center text-center'>
                <h1 className='text-3xl font-bold text-red-700'>Welcome to Panaverse</h1>
                <h2 className='text-1xl font-semibold text-black'>A Community of Web 3 and Metaverse Developers</h2>
            </div>
            <Link href="/" className="order-last">
                <button className='my-4 px-4 py-2 border-2 rounded-lg text-red-700 bg-white border-red-700 hover:text-white hover:bg-red-700' >
                    Home
                </button>
            </Link>
            <Link href="/page2" className="order-last">
                <button className='my-4 px-4 py-2 border-2 rounded-lg text-white bg-red-700 hover:text-red-700 hover:bg-white' >
                    Page2
                </button>
            </Link>
        </div>
    )
}

export default NavBar