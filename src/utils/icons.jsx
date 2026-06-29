import {
  Home,
  Building2,
  TrendingUp,
  Key,
  Calculator,
  Crown,
  Scale,
  FileCheck,
  ShieldCheck,
  BadgeCheck,
  Handshake,
  BarChart3,
  Eye,
  HeartHandshake,
  MessageCircle,
  Search,
  MapPin,
  FileText,
  Trophy,
  Globe,
  Share2,
  AtSign,
  Mail,
} from 'lucide-react';

export const iconMap = {
  Home,
  Building2,
  TrendingUp,
  Key,
  Calculator,
  Crown,
  Scale,
  FileCheck,
  ShieldCheck,
  BadgeCheck,
  Handshake,
  BarChart3,
  Eye,
  HeartHandshake,
  MessageCircle,
  Search,
  MapPin,
  FileText,
  Trophy,
  Globe,
  Share2,
  AtSign,
  Mail,
};

export function DynamicIcon({ name, ...props }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon {...props} />;
}
