import { site } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="border-t border-[#747878] bg-paper">
      <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-3 px-6 py-5 sm:flex-row sm:items-center lg:px-10">
        <p className="text-[12px] uppercase leading-5 text-sage">
          David Salami. All rights reserved.
        </p>
        <div className="flex gap-5">
          <a href={site.github} className="text-[13px] uppercase text-sage">
            Github
          </a>
          <a href={site.linkedin} className="text-[13px] uppercase text-sage">
            Linkedin
          </a>
          <a href={`mailto:${site.email}`} className="text-[13px] uppercase text-sage">
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
