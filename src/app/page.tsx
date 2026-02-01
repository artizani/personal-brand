export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">
          Welcome to Your Personal Brand
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Built with Next.js • Deployed on Cloudflare Pages
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#about"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </main>
  )
}
