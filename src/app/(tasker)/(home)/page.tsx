import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-[2000px] grid-cols-9 grid-rows-9 gap-8">
      <Link
        href="/goal"
        className="group col-span-6 row-span-3 rounded-lg bg-sky-300/75 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/currentGoal.jpg"
          className="group-hover:scale-110 transition-transform duration-300"
          width={920}
          height={920}
          quality={100}
          alt=""
        />
      </Link>
      <Link
        href="/goal"
        className="group col-span-3 row-span-3 rounded-lg bg-sky-300/75 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/currentGoal.jpg"
          className="group-hover:scale-110 transition-transform duration-300"
          width={920}
          height={920}
          quality={100}
          alt=""
        />
      </Link>
      <Link
        href="/goal"
        className="group col-span-3 row-span-3 rounded-lg bg-sky-300/75 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/currentGoal.jpg"
          className="group-hover:scale-110 transition-transform duration-300"
          width={920}
          height={920}
          quality={100}
          alt=""
        />
      </Link>
      <Link
        href="/goal"
        className="group col-span-3 row-span-3 rounded-lg bg-sky-300/75 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/currentGoal.jpg"
          className="group-hover:scale-110 transition-transform duration-300"
          width={920}
          height={920}
          quality={100}
          alt=""
        />
      </Link>{' '}
      <Link
        href="/goal"
        className="group col-span-3 row-span-3 rounded-lg bg-sky-300/75 overflow-hidden flex justify-center items-end"
      >
        <Image
          src="/currentGoal.jpg"
          className="group-hover:scale-110 transition-transform duration-300"
          width={920}
          height={920}
          quality={100}
          alt=""
        />
      </Link>
    </div>
  )
}
