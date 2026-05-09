"use client"

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/1.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Build Your Dream Store
        </h1>

        <p className="mt-4 text-lg text-gray-300">
          Modern E-commerce with Next.js, Prisma & Tailwind
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
            Shop Now
          </button>

          <button className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}