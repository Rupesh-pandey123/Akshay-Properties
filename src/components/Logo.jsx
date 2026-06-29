import logo from '../assets/logo.png';

const sizes = {
  sm: 'h-8',
  md: 'h-10',
  lg: 'h-14',
  xl: 'h-20',
};

export default function Logo({ size = 'md', className = '' }) {
  return (
    <img
      src={logo}
      alt="Akhshay Property — Real Estate"
      className={`w-auto object-contain ${sizes[size]} ${className}`}
    />
  );
}
