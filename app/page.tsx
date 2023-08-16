import InputSearch from '@/components/InputSearch'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full bg-[#0d1224] pt-[60px]'>
      <div className='py-10'>
        <div className=' text-white text-center px-4 lg:px-10'>
          <h1 className='text-[36px] font-bold lg:text-[60px] mb-8'>
            Level Up Your English Skills
          </h1>
          <p className='text-[18px] lg:text-[26px] lg:max-w-[80%] mx-auto text-[#d3d8e8]'>
            Whether you aspire to excel in foundational English skills, master language
            basics, or develop strong communication abilities, our introductory course is
            designed for you.
          </p>
        </div>
      </div>
      <div className='flex max-w-[90%] lg:max-w-[80%] mx-auto w-full flex-col lg:flex-row items-center gap-4'>
        <InputSearch />
        <div className=''>select</div>
      </div>
      <div className='cat-mini w-full mt-[40px]'>
        <div className='max-w-[90%] lg:max-w-[80%] w-full mx-auto lg:flex items-center gap-10'>
          <div className='border-[2px] border-[#3498db] mt-4 lg:mt-0 p-2 rounded-[8px] w-full h-[208px] mx-auto lg:mx-0'>
            <div className='relative w-full h-full border-[2px] border-[#505770]'>
              <Image
                src='/charts.png'
                alt=''
                fill={true} // This makes the image take up the entire available space
                objectFit='cover' // You can adjust the objectFit to your needs
                className='opacity-50'
              />
              <div className='absolute cursor-pointer font-bold w-[60%] text-center py-2 border-[1px] border-white text-white rounded-[8px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-[#a679ff]'>
                Writing Task 1
              </div>
            </div>
          </div>
          <div className='border-[2px] border-[#3498db] mt-4 lg:mt-0 p-2 rounded-[8px] w-full h-[208px] mx-auto md:mx-0'>
            <div className='relative w-full h-full border-[2px] border-[#505770]'>
              <Image
                src='/charts.png'
                alt=''
                fill={true} // This makes the image take up the entire available space
                objectFit='cover' // You can adjust the objectFit to your needs
                className='opacity-50'
              />
              <div className='absolute cursor-pointer font-bold w-[60%] text-center py-2 border-[1px] border-white text-white rounded-[8px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-[#a679ff]'>
                Writing Task 1
              </div>
            </div>
          </div>
          <div className='border-[2px] border-[#3498db] mt-4 lg:mt-0 p-2 rounded-[8px] w-full h-[208px] mx-auto md:mx-0'>
            <div className='relative w-full h-full border-[2px] border-[#505770]'>
              <Image
                src='/charts.png'
                alt=''
                fill={true} // This makes the image take up the entire available space
                objectFit='cover' // You can adjust the objectFit to your needs
                className='opacity-50'
              />
              <div className='absolute cursor-pointer font-bold w-[60%] text-center py-2 border-[1px] border-white text-white rounded-[8px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-[#a679ff]'>
                Writing Task 1
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row mx-auto max-w-[90%] lg:max-w-[80%] mt-[30px]'>
        <div className='left w-full md:w-[70%] text-white flex md:flex-col gap-6 flex-wrap'>
          <div className='item flex flex-col md:flex-row p-4 rounded-[8px] overflow-hidden border-[1px] border-[#262B42]'>
            <div className='w-full h-[200px] md:w-[280px] md:h-[300px] relative rounded-[12px] overflow-hidden flex flex-shrink-0'>
              <Image src={'/vocanal.png'} fill={true} alt='' className='' />
            </div>
            <div className='info-blog px-4 flex flex-col justify-between'>
              <div className=''>
                <div className='time-public mt-2 md:mt-0 text-[14px] text-[#dfe6e9]'>
                  05 JULY 2023
                </div>
                <Link href='/'>
                  <h3
                    style={{ width: 'max-content' }}
                    className='title-blog text-[20px] font-bold hover:text-[#ff4bbe] cursor-pointer'
                  >
                    Volcano
                  </h3>
                </Link>
                <div className='overflow-hidden line-clamp-5 text-[16px] text-[#dfe6e9]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                  quisquam inventore incidunt ea autem modi, consequatur odio tempore
                  corrupti, vel laborum necessitatibus quasi laboriosam praesentium soluta
                  perferendis totam ad temporibus. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Dolores cum doloremque nulla repellendus debitis,
                  voluptas porro eveniet excepturi saepe sequi, voluptates mollitia
                  dolorum natus maxime vitae. Laborum dolores ipsa libero?
                </div>
              </div>
              {/* dỗ dữ liệu xuống */}
              <div className='flex justify-end mt-4 md:mt-0'>
                <div
                  style={{ width: 'max-content' }}
                  className='text-right hover:text-[#ff4bbe] cursor-pointer'
                >
                  Writing Task 1
                </div>
              </div>
            </div>
          </div>
          <div className='item flex flex-col md:flex-row p-4 rounded-[8px] overflow-hidden border-[1px] border-[#262B42]'>
            <div className='w-full h-[200px] md:w-[280px] md:h-[300px] relative rounded-[12px] overflow-hidden flex flex-shrink-0'>
              <Image src={'/vocanal.png'} fill={true} alt='' className='' />
            </div>
            <div className='info-blog px-4 flex flex-col justify-between'>
              <div className=''>
                <div className='time-public mt-2 md:mt-0 text-[14px] text-[#dfe6e9]'>
                  05 JULY 2023
                </div>
                <Link href='/'>
                  <h3
                    style={{ width: 'max-content' }}
                    className='title-blog text-[20px] font-bold hover:text-[#ff4bbe] cursor-pointer'
                  >
                    Volcano
                  </h3>
                </Link>
                <div className='overflow-hidden line-clamp-5 text-[16px] text-[#dfe6e9]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                  quisquam inventore incidunt ea autem modi, consequatur odio tempore
                  corrupti, vel laborum necessitatibus quasi laboriosam praesentium soluta
                  perferendis totam ad temporibus. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Dolores cum doloremque nulla repellendus debitis,
                  voluptas porro eveniet excepturi saepe sequi, voluptates mollitia
                  dolorum natus maxime vitae. Laborum dolores ipsa libero?
                </div>
              </div>
              {/* dỗ dữ liệu xuống */}
              <div className='flex justify-end mt-4 md:mt-0'>
                <div
                  style={{ width: 'max-content' }}
                  className='text-right hover:text-[#ff4bbe] cursor-pointer'
                >
                  Writing Task 1
                </div>
              </div>
            </div>
          </div>
          <div className='item flex p-4 rounded-[8px] overflow-hidden border-[1px] border-[#262B42]'>
            <div className='w-full h-[200px] md:w-[280px] md:h-[300px] relative rounded-[12px] overflow-hidden flex flex-shrink-0'>
              <Image src={'/vocanal.png'} fill={true} alt='' className='' />
            </div>
            <div className='info-blog px-4 flex flex-col justify-between'>
              <div className=''>
                <div className='time-public mt-2 md:mt-0 text-[14px] text-[#dfe6e9]'>
                  05 JULY 2023
                </div>
                <Link href='/'>
                  <h3
                    style={{ width: 'max-content' }}
                    className='title-blog text-[20px] font-bold hover:text-[#ff4bbe] cursor-pointer'
                  >
                    Volcano
                  </h3>
                </Link>
                <div className='overflow-hidden line-clamp-5 text-[16px] text-[#dfe6e9]'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                  quisquam inventore incidunt ea autem modi, consequatur odio tempore
                  corrupti, vel laborum necessitatibus quasi laboriosam praesentium soluta
                  perferendis totam ad temporibus. Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Dolores cum doloremque nulla repellendus debitis,
                  voluptas porro eveniet excepturi saepe sequi, voluptates mollitia
                  dolorum natus maxime vitae. Laborum dolores ipsa libero?
                </div>
              </div>
              {/* dỗ dữ liệu xuống */}
              <div className='flex justify-end mt-4 md:mt-0'>
                <div
                  style={{ width: 'max-content' }}
                  className='text-right hover:text-[#ff4bbe] cursor-pointer'
                >
                  Writing Task 1
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right w-[26%]'>khang</div>
      </div>
    </div>
  )
}
