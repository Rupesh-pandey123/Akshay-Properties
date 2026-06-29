import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/content';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-surface">
      <Container>
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say"
          description="Real stories from clients who found their perfect property with us."
        />

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-light rounded-3xl p-8 sm:p-12 text-center shadow-premium relative"
                >
                  <Quote className="w-10 h-10 text-accent/30 mx-auto mb-6" />

                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-lg sm:text-xl text-primary leading-relaxed mb-8 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      loading="lazy"
                      className="w-14 h-14 rounded-full object-cover ring-2 ring-accent/30"
                    />
                    <div className="text-left">
                      <p className="font-bold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
