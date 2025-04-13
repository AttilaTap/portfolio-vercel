import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a
        href={socialLinks.twitter}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          src='/profile.png'
          alt='Profile photo'
          className='rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0'
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className='mb-8 text-2xl font-medium'>Hi, I’m Attila 👋</h1>

      <div className='prose prose-neutral dark:prose-invert'>
        <p>
          I'm a lifelong problem solver with a strong background in supply chain operations, logistics, and business management — and now I'm diving deeper into the world of
          development. After years of optimizing systems and solving complex real-world challenges, I’ve found that many of the same skills transfer beautifully into writing clean,
          functional, and scalable code.
        </p>
        <p>
          I speak Hungarian, English, and German fluently, and I thrive at the intersection of structure and creativity — whether that’s designing internal tools, writing
          automation scripts, or learning about AI and machine learning. I'm deeply interested in every part of development: front-end, back-end, databases, scripting, and building
          useful stuff that actually makes a difference.
        </p>
        <p>
          I may not be in my early twenties, but that’s exactly what gives me an edge — I bring perspective, discipline, and the drive to constantly learn and build. Every project
          you see here reflects that mindset.
        </p>
        <p>
          You can explore my public work on{" "}
          <a
            href='https://github.com/AttilaTap?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}
