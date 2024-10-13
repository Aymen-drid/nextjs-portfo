import Link from 'next/link'
import { FaLinkedinIn, FaYoutube, FaTwitter, FaGithub } from 'react-icons/fa'
import { Button } from './ui/button'

const links = [
  { icon: <FaLinkedinIn />, path: '' },
  { icon: <FaYoutube />, path: '' },
  { icon: <FaTwitter />, path: '' },
  { icon: <FaGithub />, path: 'https://github.com/Aymen-drid' },
]

const Social = () => {
  return (
    <div className="flex flex-row items-center text-center mb-8 xl:mb-0 gap-4 ">
      {links.map((item, index) => {
        return (
          <>
            <Link
              key={index}
              href={item.path}
              className="bg-primary text-accent border border-accent rounded-full p-3.5 hover:bg-accent-hover"
            >
              {item.icon}
            </Link>
          </>
        )
      })}
    </div>
  )
}

export default Social
