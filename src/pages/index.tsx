// pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Price Listem</title>
      </Head>
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)' }}></div>
      </div>
      <div className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl" aria-hidden="true">
        <div className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: 'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)' }}></div>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">PriceListem 2023</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
            <circle cx="1" cy="1" r="1" />
          </svg>
          Hemen şimdi Price Listem'e abone olun – Ağustos indirimlerini kaçırmayın.
        </p>
        <a href="#" className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">Bültene Kaydol <span aria-hidden="true">&rarr;</span></a>
      </div>
      <div className="flex flex-1 justify-end">
        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <svg className="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>

      <header className="bg-blue-500 py-4">
        <nav className="container mx-auto flex items-center justify-between">
          <h1 className="text-white font-bold text-xl">PriceListem.com</h1>
          <ul className="flex space-x-4">
            <li>
              <a className="text-white hover:text-gray-200" href="#about">Hakkında</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-200" href="#services">Hizmetler</a>
            </li>
            <li>
              <a className="text-white hover:text-gray-200" href="#contact">İletişim</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto flex-grow py-8">
        {/* <section id="about" className="mb-8">
          <h2 className="text-3xl font-bold">Hakkında</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar dui eget neque faucibus, sed tincidunt metus lobortis. Fusce ac consectetur velit. Vivamus dignissim dui in suscipit suscipit. Suspendisse vehicula ultrices dolor, in facilisis ligula tristique non.</p>
        </section>

        <section id="services" className="mb-8">
          <h2 className="text-3xl font-bold">Hizmetler</h2>
          <ul className="mt-4 space-y-2">
            <li>Web Tasarım</li>
            <li>Frontend Geliştirme</li>
            <li>Backend Geliştirme</li>
            <li>Mobil Uygulama Geliştirme</li>
          </ul>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-bold">İletişim</h2>
          <p>Email: info@example.com</p>
          <p>Telefon: 123-456-7890</p>
        </section> */}
      </main>

      <footer className="bg-blue-500 py-4 text-white text-center">
        &copy; 2023 Price Listem Tüm hakları saklıdır.
      </footer>
    </div>
  );
}
