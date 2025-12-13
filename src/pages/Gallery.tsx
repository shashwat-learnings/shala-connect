import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const galleryCategories = {
  campus: {
    title: "Campus",
    images: [
      { src: "https://images.unsplash.com/photo-1562774053-701939374585?w=600", alt: "School Building" },
      { src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600", alt: "Library" },
      { src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600", alt: "Classroom" },
      { src: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600", alt: "Science Lab" },
      { src: "https://images.unsplash.com/photo-1568667256549-094345857637?w=600", alt: "Computer Lab" },
      { src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600", alt: "Playground" },
    ],
  },
  events: {
    title: "Events",
    images: [
      { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600", alt: "Annual Day" },
      { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600", alt: "Cultural Program" },
      { src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600", alt: "Award Ceremony" },
      { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600", alt: "Graduation" },
      { src: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=600", alt: "Republic Day" },
      { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600", alt: "Science Exhibition" },
    ],
  },
  sports: {
    title: "Sports",
    images: [
      { src: "https://images.unsplash.com/photo-1461896836934- voices-1aff7e2d?w=600", alt: "Sports Day" },
      { src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600", alt: "Football Match" },
      { src: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=600", alt: "Cricket" },
      { src: "https://images.unsplash.com/photo-1544298621-a21d1b1ad8d8?w=600", alt: "Basketball" },
      { src: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600", alt: "Athletics" },
      { src: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=600", alt: "Swimming" },
    ],
  },
  cultural: {
    title: "Cultural",
    images: [
      { src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600", alt: "Dance Performance" },
      { src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600", alt: "Music Concert" },
      { src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600", alt: "Art Exhibition" },
      { src: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600", alt: "Drama Performance" },
      { src: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?w=600", alt: "Traditional Day" },
      { src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600", alt: "Festival Celebration" },
    ],
  },
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Photo Gallery</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Take a visual tour of our vibrant campus, exciting events, and memorable moments 
            that make Vidya Bharati special.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="campus" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {Object.entries(galleryCategories).map(([key, category]) => (
                <TabsTrigger key={key} value={key}>
                  {category.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(galleryCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {category.images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer group relative"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors flex items-end">
                        <span className="text-primary-foreground p-4 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                          {image.alt}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 z-10 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-background transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage.src.replace("w=600", "w=1200")}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Video Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Virtual Campus Tour</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Can't visit us in person? Take a virtual tour of our beautiful campus and facilities.
          </p>
          <div className="max-w-3xl mx-auto aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-primary border-b-[12px] border-b-transparent ml-1" />
              </div>
              <p className="text-muted-foreground">Virtual Tour Video</p>
              <p className="text-sm text-muted-foreground/60">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
