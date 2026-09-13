export interface BrandInfo {
  domain: string;
  name: string;
  logoUrl: string;
  faviconUrl: string;
  primaryColor: string;
  tagline: string;
  description: string;
}

export interface MicrositeSection {
  id: string;
  title: string;
  content: string;
  iconName?: string;
}

export interface MicrositeData {
  id: string;
  slug: string;
  createdAt: string;
  sender: BrandInfo;
  prospect: BrandInfo;
  headline: string;
  subheadline: string;
  template: 'pitch' | 'executive' | 'showcase';
  valuePoints: {
    title: string;
    description: string;
    impactMetric?: string;
  }[];
  problemSolution: {
    problem: string;
    solution: string;
  }[];
  meetingUrl?: string;
  videoUrl?: string;
  views: number;
  likes: number;
}

export interface GenerateRequest {
  senderDomain: string;
  prospectDomain: string;
  template?: 'pitch' | 'executive' | 'showcase';
  customNote?: string;
}
