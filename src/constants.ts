import { ShieldCheck, FileText, Landmark, CreditCard, Briefcase, UserCheck, Plane, Wallet, Building2, Receipt } from 'lucide-react';

export const BUSINESS_INFO = {
  name: 'BuzyIndia',
  phone: '9964193385',
  address: 'Whitefield, Bengaluru-560066',
  email: 'info@buzyindia.com',
  website: 'www.buzyIndia.com'
};

export const SERVICES = [
  {
    id: 'gst-reg',
    title: 'GST Registration',
    description: 'Get your business GST registered quickly and efficiently with our expert help.',
    icon: ShieldCheck,
    image: 'input_file_0.png',
  },
  {
    id: 'gst-filing',
    title: 'GST Filing',
    description: 'Timely and accurate GST return filing to keep your business compliant.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'passport',
    title: 'Passport Services',
    description: 'Assistance with new passport applications, renewals, and corrections.',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1544253710-9a695d8d2f21?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'msme',
    title: 'MSME Registration',
    description: 'Register your micro, small, or medium enterprise to avail government benefits.',
    icon: Briefcase,
    image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'fssai',
    title: 'FSSAI License',
    description: 'Mandatory food safety license for any business involved in food handling.',
    icon: UserCheck,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'pan',
    title: 'PAN Card',
    description: 'Swift application process for new PAN cards or changes in existing ones.',
    icon: CreditCard,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4545b9b8d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'pf-withdraw',
    title: 'PF Withdrawal',
    description: 'Hassle-free assistance in withdrawing your Provident Fund amount.',
    icon: Wallet,
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'bank-loans',
    title: 'Bank Loans',
    description: 'Guidance and processing for personal, business, and home loans.',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'insurance',
    title: 'Insurance',
    description: 'Wide range of insurance products including health, life, and motor insurance.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e772?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'income-tax',
    title: 'Income Tax',
    description: 'ITR filing and tax planning services for individuals and businesses.',
    icon: Receipt,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
  }
];
