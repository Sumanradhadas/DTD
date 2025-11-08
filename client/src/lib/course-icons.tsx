import {
  Brain, Globe, Code, Coffee, Smartphone, Atom, Circle, Wrench,
  TrendingUp, Table, Database, FileSpreadsheet, BarChart, PieChart,
  Palette, Image, Pencil, Layout, Figma, Camera, Tag,
  Video, Film, Box, Aperture, Youtube,
  Megaphone, Share2, PenTool, Search, Mail, ShoppingCart, Briefcase,
  FileText, Book, Cloud, MessageSquare, Archive,
  Handshake, Building, Hotel, PartyPopper,
  DollarSign, FileCheck, Calculator, Building2, LineChart,
  Ruler, Landmark, Home, BrickWall,
  Settings, Network, Shield, Lock, Terminal, Server, Monitor,
  ClipboardList, Cog, CheckSquare, Truck, Users,
  Lightbulb, Target, Clock, Languages, Rocket, Wallet, MapPin, GraduationCap, Scale,
  Laptop, HardDrive
} from 'lucide-react';

export const CourseIcons: Record<string, any> = {
  // Generic
  'brain': Brain,
  'globe': Globe,
  'code': Code,
  'coffee': Coffee,
  'smartphone': Smartphone,
  'atom': Atom,
  'circle': Circle,
  'wrench': Wrench,
  'monitor': Monitor,
  'laptop': Laptop,
  
  // Data & Analytics  
  'trending-up': TrendingUp,
  'table': Table,
  'database': Database,
  'file-spreadsheet': FileSpreadsheet,
  'bar-chart': BarChart,
  'pie-chart': PieChart,
  
  // Design & Creative
  'palette': Palette,
  'image': Image,
  'pencil': Pencil,
  'layout': Layout,
  'figma': Figma,
  'camera': Camera,
  'tag': Tag,
  'video': Video,
  'film': Film,
  'box': Box,
  'aperture': Aperture,
  'youtube': Youtube,
  
  // Marketing & Communication
  'megaphone': Megaphone,
  'share-2': Share2,
  'pen-tool': PenTool,
  'search': Search,
  'mail': Mail,
  'shopping-cart': ShoppingCart,
  'briefcase': Briefcase,
  
  // Office & Admin
  'file-text': FileText,
  'book': Book,
  'cloud': Cloud,
  'message-square': MessageSquare,
  'archive': Archive,
  
  // Business & Management
  'handshake': Handshake,
  'building': Building,
  'hotel': Hotel,
  'party-popper': PartyPopper,
  'dollar-sign': DollarSign,
  'file-check': FileCheck,
  'calculator': Calculator,
  'building-2': Building2,
  'line-chart': LineChart,
  
  // Engineering & CAD
  'ruler': Ruler,
  'landmark': Landmark,
  'home': Home,
  'brick-wall': BrickWall,
  
  // IT & Networking
  'settings': Settings,
  'network': Network,
  'shield': Shield,
  'lock': Lock,
  'terminal': Terminal,
  'server': Server,
  'hard-drive': HardDrive,
  
  // Services
  'clipboard-list': ClipboardList,
  'cog': Cog,
  'check-square': CheckSquare,
  'truck': Truck,
  'users': Users,
  
  // Skills & Development
  'lightbulb': Lightbulb,
  'target': Target,
  'clock': Clock,
  'languages': Languages,
  'rocket': Rocket,
  'wallet': Wallet,
  'map-pin': MapPin,
  'graduation-cap': GraduationCap,
  'scale': Scale,
};

export function getCourseIcon(iconName: string) {
  return CourseIcons[iconName] || Brain;
}
