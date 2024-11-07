interface Service {
    title: string;
    description: string;
    icon: string;
  }
  
  export interface ServiceCardProps extends Service {
    index: number;
  }