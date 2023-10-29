import Avatar from '../assets/Avatar.png'
import { Image } from '@chakra-ui/image'

function Home() {
  return (
    <div className="container mx-auto font-sans">
      <div className="flex justify-center">
        <Image
          src={Avatar}
          alt="profile img"
          className="h-auto max-w-full w-1/3"
        />
      </div>
      <div className="flex justify-center text-lg">
        <p>Hello, I'm</p>
      </div>
      <div className="flex justify-center font-oleo text-6xl mb-5">
        <p>Soyeon Lee</p>
      </div>
      <div className="justify-center block lg:hidden font-bold mb-5">
        <p>Full stack Web & App Developer</p>
      </div>
      <div className="flex justify-center">
        <p className="lg:w-1/3 w-2/4 text-sm font-normal">
          I'm a person who passionate about exploring human and digital
          relationships. also I deliver innovative development solutions to
          drive business growth.
        </p>
      </div>
    </div>
  )
}

export default Home
