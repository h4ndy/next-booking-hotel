
import { Metadata } from 'next'
import HeaderSection from '@/components/header-section'
import Image from 'next/image'
import { IoEyeOutline,IoLocateOutline } from 'react-icons/io5'  

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Who We Are',
  }

const AboutPage = () => {
  return (
    <div>
        <HeaderSection title="About Us" subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <div className="max-w-screen mx-auto py-20 px-4">
            <div className="grid md:grid-cols-2 gap-8">
                <Image src="/about-image.jpg" width={650} height={579} alt="about image" className=""></Image>
                <div>
                    <h2 className="text-5xl  text-gray-900 font-semibold mb-4">Who We Are</h2>
                    <p className="text-gray-700 py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, rerum? Deserunt hic, magnam similique fugit ab numquam debitis eaque sapiente.</p>
                    <ul className="list-item space-y-4 pt-8">
                        <li className='flex gap-5'>
                            <div className="flex-none mt-1">
                                <IoEyeOutline size={24} className="size-7" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1">Vision :</h4>
                                <p className="text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione ducimus nulla dicta, natus ab eos!</p>
                            </div>
                        </li>
                         <li className='flex gap-5'>
                            <div className="flex-none mt-1">
                                <IoLocateOutline size={24} className="size-7" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold mb-1">Mision :</h4>
                                <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis architecto eligendi nam consequuntur aut mollitia dolore.</p>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutPage