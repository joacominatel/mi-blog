import Image from 'next/image';

export default function HomeSection() {
    const mac_buttons = "/images/buttons-mac.png";

    return (
        <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center bg-transparent"
      >
        <div className="relative z-10 px-48 py-28 font-mono text-white rounded-b-2xl shadow-2xl bg-opacity-90 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800">
          <div className="absolute top-0 left-0 w-24 h-24 flex items-center justify-center">
            <Image
              src={mac_buttons}
              alt="Mac buttons"
              width={65}
              height={65}
              className="object-cover"
            />
          </div>
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-800 rounded-t-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
          <h1 className="text-4xl font-bold">Joaquin Minatel \ Blog</h1>
          <p className="text-lg">Blog de tecnología y desarrollo</p>

          <div className="mt-8">
            <button
            className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-not-allowed'
            disabled
            >
              Ver blog
            </button>
          </div>
        </div>
      </section>
    )
}