export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <p className="font-semibold text-gray-900">David Salami</p>
          <p>
            <a href="mailto:hello@davidsalami.com" className="hover:text-tesco-blue">
              hello@davidsalami.com
            </a>
          </p>
          <p className="mt-4">© {new Date().getFullYear()} David Salami. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
