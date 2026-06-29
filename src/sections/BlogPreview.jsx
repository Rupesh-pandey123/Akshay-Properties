import { motion } from 'framer-motion';
import { Calendar, ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../data/content';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import AnimatedCard from '../components/AnimatedCard';
import { staggerContainer, staggerItem, imageZoom } from '../animations/variants';

export default function BlogPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <Container>
        <SectionTitle
          subtitle="Insights"
          title="Latest From Our Blog"
          description="Expert perspectives on market trends, buying guides, and investment strategies."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={staggerItem}>
              <AnimatedCard className="bg-white overflow-hidden group cursor-pointer h-full">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <motion.img
                    variants={imageZoom}
                    initial="rest"
                    whileHover="hover"
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-accent text-primary rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-muted text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                    Read More
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
