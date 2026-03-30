import Image from 'next/image';

const galleryImages = [
  { id: 1, src: 'https://picsum.photos/seed/dikanz-1/800/800', alt: 'Students in Robotics Lab', span: 'col-span-1 row-span-1' },
  { id: 2, src: 'https://picsum.photos/seed/dikanz-2/1600/800', alt: 'AI Hackathon Event', span: 'col-span-2 row-span-1' },
  { id: 3, src: 'https://picsum.photos/seed/dikanz-3/800/1600', alt: '3D Printing Workshop', span: 'col-span-1 row-span-2' },
  { id: 4, src: 'https://picsum.photos/seed/dikanz-4/800/800', alt: 'Cybersecurity Seminar', span: 'col-span-1 row-span-1' },
  { id: 5, src: 'https://picsum.photos/seed/dikanz-5/800/800', alt: 'Incubation Center Workspace', span: 'col-span-1 row-span-1' },
  { id: 6, src: 'https://picsum.photos/seed/dikanz-6/1600/800', alt: 'Graduation and Pitch Day', span: 'col-span-2 row-span-1' },
];

export default function GalleryPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6">Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse into the vibrant life, events, and innovations at DIKANZ EDU TECH.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className={`relative rounded-2xl overflow-hidden group ${image.span} bg-gray-100`}
            >
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            * Note: The gallery showcases moments from DIKANZ events and facilities.
          </p>
        </div>
      </div>
    </div>
  );
}
