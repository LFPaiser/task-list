import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <div className="flex items-center justify-between">
      <Link href="/" className="text-6xl font-extralight">
        taskery
      </Link>
      <Link href="/" className="flex items-center gap-2 hover:underline">
        <span className="text-lg">Conta</span>
        <Image
          src="https://github.com/LFPaiser.png"
          className="h-10 w-10 rounded-full"
          width={96}
          height={96}
          alt=""
        />
      </Link>
    </div>
  )
}
