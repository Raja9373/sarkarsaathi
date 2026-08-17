import React from 'react';
import { 
  FileCheck, 
  CreditCard, 
  Car, 
  Building, 
  Zap, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Building2, 
  Heart, 
  ShieldAlert, 
  Gift, 
  Receipt, 
  MessageSquare, 
  Landmark, 
  Compass, 
  Calculator, 
  Download, 
  Search, 
  RefreshCw, 
  Edit, 
  BookOpen, 
  PhoneCall, 
  ArrowRight
} from 'lucide-react';
import { MAIN_CATEGORIES } from '../data/servicesData';
import { ActiveTab } from '../types';

interface CategoryGridProps {
  onSelectCategory: (categoryName: string) => void;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenEmergency?: () => void;
  onSelectGovtOffices?: () => void;
  onSelectGovernmentFinders?: () => void;
  currentStateId?: string;
  onNavigateToFinder?: (finderId: string) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  onSelectCategory,
  setActiveTab,
  onOpenEmergency,
  onSelectGovtOffices,
  onSelectGovernmentFinders,
  currentStateId = 'delhi',
  onNavigateToFinder
}) => {
  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'Identity & Documents': return <FileCheck className="w-5 h-5 text-[#FF6B00]" />;
      case 'Certificates': return <CreditCard className="w-5 h-5 text-emerald-400" />;
      case 'Licences': return <Building className="w-5 h-5 text-blue-400" />;
      case 'Vehicles & Transport': return <Car className="w-5 h-5 text-amber-400" />;
      case 'Property & Housing': return <Building2 className="w-5 h-5 text-cyan-400" />;
      case 'Utilities': return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Family Services': return <Users className="w-5 h-5 text-pink-400" />;
      case 'Education': return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      case 'Employment': return <Briefcase className="w-5 h-5 text-teal-400" />;
      case 'Business': return <Building2 className="w-5 h-5 text-purple-400" />;
      case 'Health': return <Heart className="w-5 h-5 text-red-400" />;
      case 'Police & Legal': return <ShieldAlert className="w-5 h-5 text-sky-400" />;
      case 'Government Schemes': return <Gift className="w-5 h-5 text-rose-400" />;
      case 'Taxes & Finance': return <Receipt className="w-5 h-5 text-[#FF6B00]" />;
      case 'Complaints': return <MessageSquare className="w-5 h-5 text-orange-400" />;
      case 'Banking': return <Landmark className="w-5 h-5 text-blue-400" />;
      case 'Government Finders': return <Compass className="w-5 h-5 text-amber-400" />;
      case 'Government Offices': return <Building2 className="w-5 h-5 text-[#FF6B00]" />;
      case 'Government Calculators': return <Calculator className="w-5 h-5 text-emerald-400" />;
      case 'Downloads': return <Download className="w-5 h-5 text-cyan-400" />;
      case 'Status Check': return <Search className="w-5 h-5 text-[#FF6B00]" />;
      case 'Online Apply': return <Zap className="w-5 h-5 text-[#FF6B00]" />;
      case 'Renewal': return <RefreshCw className="w-5 h-5 text-teal-400" />;
      case 'Corrections': return <Edit className="w-5 h-5 text-pink-400" />;
      case 'RTI': return <BookOpen className="w-5 h-5 text-indigo-400" />;
      case 'Emergency & Helplines': return <PhoneCall className="w-5 h-5 text-red-400" />;
      default: return <Landmark className="w-5 h-5 text-[#FF6B00]" />;
    }
  };

  const handleCategoryClick = (cat: string) => {
    if (cat === 'Banking') {
      setActiveTab('banking');
    } else if (cat === 'Complaints') {
      setActiveTab('complaints');
    } else if (cat === 'Government Offices') {
      if (onSelectGovtOffices) {
        onSelectGovtOffices();
      } else {
        setActiveTab('finders');
      }
    } else if (cat === 'Government Finders') {
      if (onSelectGovernmentFinders) {
        onSelectGovernmentFinders();
      } else {
        setActiveTab('finders');
      }
    } else if (cat === 'Government Calculators') {
      setActiveTab('calculators');
    } else if (cat === 'Downloads') {
      setActiveTab('downloads');
    } else if (cat === 'Status Check') {
      setActiveTab('status-check');
    } else if (cat === 'Online Apply') {
      setActiveTab('online-apply');
    } else if (cat === 'Government Departments') {
      setActiveTab('delhi-govt');
    } else if (cat === 'Emergency & Helplines') {
      if (onOpenEmergency) onOpenEmergency();
      else onSelectCategory(cat);
    } else {
      onSelectCategory(cat);
    }
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">Explore Services by Domain</span>
          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">Main Categories & Hubs</h2>
        </div>
        <p className="text-xs text-zinc-400 max-w-md">
          Access 100+ official Delhi NCT and Central Government services directly grouped by category.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {MAIN_CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="p-4 rounded-xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00]/50 hover:bg-[#161F30] transition text-left group flex flex-col justify-between gap-3 shadow-md"
          >
            <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 w-fit group-hover:scale-105 transition">
              {getCategoryIcon(category)}
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold text-zinc-100 group-hover:text-[#FF6B00] transition line-clamp-2">
                {category}
              </h3>
              <span className="text-[10px] text-zinc-400 flex items-center gap-1 mt-1 font-semibold">
                Explore <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition" />
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* State-Aware Government Finders Directory */}
      <div className="mt-12 pt-8 border-t border-zinc-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">State & Central Directory</span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">Government Finders & Locators</h3>
          </div>
          <button
            onClick={() => {
              if (onNavigateToFinder) onNavigateToFinder('pincode');
              else setActiveTab('finders');
            }}
            className="text-xs font-bold text-[#FF6B00] hover:underline flex items-center gap-1 self-start sm:self-auto"
          >
            <span>View All 18 Locators</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { id: 'pincode', title: 'Pincode Finder', hindi: 'पिनकोड खोजें', icon: '📍', desc: 'STD & Area Locator' },
            { id: 'ifsc', title: 'IFSC Code Finder', hindi: 'IFSC बैंक कोड', icon: '🏦', desc: 'RBI Bank Branches' },
            { id: 'hospital', title: 'Govt Hospitals', hindi: 'सरकारी अस्पताल', icon: '🏥', desc: 'Emergency & Beds' },
            { id: 'police-station', title: 'Police Stations', hindi: 'थाना खोजें', icon: '👮', desc: 'SHO & Helpline' },
            { id: 'rto-office', title: 'RTO Offices', hindi: 'RTO कार्यालय', icon: '🚗', desc: 'Driving & RC Zone' },
            { id: 'govt-offices', title: 'Court & Offices', hindi: 'SDM व कचहरी', icon: '🏛️', desc: 'Revenue & Tehsils' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                if (onNavigateToFinder) {
                  onNavigateToFinder(item.id);
                } else {
                  setActiveTab('finders');
                }
              }}
              className="p-3.5 rounded-xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00] hover:bg-[#161F30] transition text-left group flex flex-col justify-between gap-2 shadow-sm"
            >
              <div className="text-2xl">{item.icon}</div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF6B00] transition">
                  {item.title}
                </h4>
                <p className="text-[10px] text-zinc-400 font-medium">{item.hindi}</p>
                <p className="text-[10px] text-zinc-500 mt-1">{item.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
