const logos = [
  { src: '/images/nrs.png', alt: 'NRS', box: 'h-9 w-[128px]', img: 'absolute inset-0 size-full object-contain object-left' },
  { src: '/images/dangote.png', alt: 'Dangote', box: 'h-10 w-[72px]', img: 'absolute inset-0 size-full object-contain' },
  { src: '/images/natwest.png', alt: 'NatWest Group', box: 'h-8 w-[108px]', img: 'absolute inset-0 size-full object-contain object-left' },
  {
    src: '/images/scotland.png',
    alt: 'Bank of Scotland',
    box: 'h-9 w-[118px] overflow-hidden',
    img: 'absolute left-[-4%] top-[-110%] h-[320%] w-[108%] max-w-none',
  },
  {
    src: '/images/citibank.png',
    alt: 'Citibank',
    box: 'h-8 w-[96px] overflow-hidden',
    img: 'absolute left-[-6%] top-[-108%] h-[310%] w-[116%] max-w-none',
  },
  {
    src: '/images/lloyds.png',
    alt: 'Lloyds Bank',
    box: 'h-8 w-[102px] overflow-hidden',
    img: 'absolute left-0 top-[-96%] h-[290%] w-full max-w-none',
  },
]

const extraLogos = [
  {
    src: '/images/aci.png',
    alt: 'ACI',
    box: 'h-8 w-[96px] overflow-hidden',
    img: 'absolute left-0 top-[-100%] h-[300%] w-full max-w-none',
  },
  { src: '/images/vocalink.png', alt: 'VocaLink', box: 'h-8 w-[100px]', img: 'absolute inset-0 size-full object-contain' },
]

export default function BrandLogos({ extra }: { extra?: boolean }) {
  const items = extra ? [...logos, ...extraLogos] : logos

  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
      {items.map((logo) => (
        <div key={logo.alt} className={`relative shrink-0 ${logo.box}`}>
          <img src={logo.src} alt={logo.alt} className={logo.img} />
        </div>
      ))}
    </div>
  )
}
