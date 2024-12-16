  
  export interface Media {
    id: string;
    type: 'image' | 'video';
    url: string;
    annotations?: Annotation[];
  }
  
  export interface Look {
    id: string;
    media: Media[];
    products: Product[];
  }
  
  export interface Product {
    id: string;
    name: string;
    image: string;
    detailPageUrl: string;
  }

 export interface Annotation {
    id: number;
    top: string;          
    left: string;          
    label?: string;       
    productId: string;     
    onClick?: () => void; 
  }
  