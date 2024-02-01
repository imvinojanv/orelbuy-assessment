import Image from "next/image"

const AdBanner = () => {
    return (
        <div className="mx-auto px-4 max-w-screen-xl flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
                <div className='relative w-full h-[200px] sm:h-[280px] md:h-[200px]'>
                    <Image
                        fill
                        alt='ad-img'
                        src='https://cdnstatic.orelbuy.lk/image-743ce307-a89d-4c71-b715-1b66b1dcc75d.png'
                        className="rounded-xl"
                    />
                </div>
                <div className='relative w-full h-[200px] sm:h-[280px] md:h-[200px]'>
                    <Image
                        fill
                        alt='ad-img'
                        src='https://cdnstatic.orelbuy.lk/image-4c6fbb94-bdac-4405-b408-94a471162b9d.png'
                        className="rounded-xl"
                    />
                </div>
                <div className='relative w-full h-[200px] sm:h-[280px] md:h-[200px]'>
                    <Image
                        fill
                        alt='ad-img'
                        src='https://cdnstatic.orelbuy.lk/image-5379d00f-d75e-4947-a247-85958d7c3c72.png'
                        className="rounded-xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default AdBanner