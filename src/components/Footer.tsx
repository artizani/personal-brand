export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-3">
          <p className="font-bold text-xl">David Salami</p>
          <p>
            <a href="mailto:hello@davidsalami.com" className="hover:text-tesco-blue transition-colors">
              hello@davidsalami.com
            </a>
          </p>
          <p className="mt-4 text-gray-400 text-sm">
            © {new Date().getFullYear()} David Salami. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
