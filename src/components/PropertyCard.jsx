import { motion } from 'framer-motion';
import { Bed, Bath, Maximize, MapPin, ArrowUpRight } from 'lucide-react';
import AnimatedCard from './AnimatedCard';
import AnimatedButton from './AnimatedButton';
import { formatPrice, formatArea } from '../utils';
import { imageZoom } from '../animations/variants';

export default function PropertyCard({ property }) {
  return (
    <AnimatedCard className="group bg-white overflow-hidden">
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img
          variants={imageZoom}
          initial="rest"
          whileHover="hover"
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-accent text-primary rounded-full">
            {property.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <ArrowUpRight className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
            {property.title}
          </h3>
          <p className="text-lg font-bold text-accent whitespace-nowrap">
            {formatPrice(property.price, property.type)}
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-muted mb-4">
          <MapPin className="w-4 h-4 shrink-0" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center gap-5 pt-4 border-t border-surface-dark text-sm text-muted">
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <Bed className="w-4 h-4" />
              {property.bedrooms} Beds
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Bath className="w-4 h-4" />
            {property.bathrooms} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4" />
            {formatArea(property.area)}
          </span>
        </div>

        <div className="mt-5">
          <AnimatedButton variant="outline" size="sm" href="#contact" className="w-full">
            View Details
          </AnimatedButton>
        </div>
      </div>
    </AnimatedCard>
  );
}
