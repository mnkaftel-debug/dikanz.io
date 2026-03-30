import Image from 'next/image';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80', alt: 'Advanced Robotics Lab', span: 'col-span-1 row-span-1' },
  { id: 2, src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80', alt: 'AI & Coding Hackathon', span: 'col-span-2 row-span-1' },
  { id: 3, src: 'https://images.unsplash.com/photo-1631558556885-215431f49f54?auto=format&fit=crop&q=80', alt: '3D Printing & Prototyping', span: 'col-span-1 row-span-2' },
  { id: 4, src: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80', alt: 'Cybersecurity Defense Workshop', span: 'col-span-1 row-span-1' },
  { id: 5, src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80', alt: 'Startup Incubation Hub', span: 'col-span-1 row-span-1' },
  { id: 6, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80', alt: 'Innovation Pitch Day', span: 'col-span-2 row-span-1' },
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
