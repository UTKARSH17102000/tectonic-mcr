import { Look } from "./type";

export const looks: Look[] = [
    {
      id: '1',
      media: [
        {
          id: 'm1',
          type: 'image',
          url: 'https://plus.unsplash.com/premium_photo-1667520043080-53dcca77e2aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          annotations: [
            { id: 1, top: '60%', left: '52%', label: 'T-Shirt', productId: 'p1' },
            { id: 2, top: '85%', left: '45%', label: 'Jacket', productId: 'p2' },
          ],
        },
        {
          id: 'm2',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1514654306380-538bac0ed82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW9kZWxzfGVufDB8fDB8fHww',
          annotations: [
            { id: 1, top: '60%', left: '52%', label: 'T-Shirt', productId: 'p1' },
            { id: 2, top: '85%', left: '45%', label: 'Shoes', productId: 'p2' },
          ],
        },
      ],
      products: [
        { id: 'p1', name: 'T-Shirt', image: '', detailPageUrl: '/product/1' },
        { id: 'p2', name: 'Pants', image: '', detailPageUrl: '/product/2' },
        { id: 'p3', name: 'Shoes', image: '', detailPageUrl: '/product/3' },
      ],
    },
    {
      id: '2',
      media: [
        {
          id: 'm1',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1566802725767-890e3f6e69b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TW9kZWxzfGVufDB8fDB8fHww',
          annotations: [
            { id: 1, top: '60%', left: '52%', label: 'T-Shirt', productId: 'p1' },
            { id: 2, top: '85%', left: '45%', label: 'Jacket', productId: 'p2' },
          ],
        },
      ],
      products: [
        { id: 'p1', name: 'T-Shirt', image: '', detailPageUrl: '/product/1' },
        { id: 'p2', name: 'Pants', image: '', detailPageUrl: '/product/2' },
        { id: 'p3', name: 'Shoes', image: '', detailPageUrl: '/product/3' },
      ],
    },
    {
      id: '3',
      media: [
        {
          id: 'm1',
          type: 'image',
          url: 'https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TW9kZWxzfGVufDB8fDB8fHww',
          annotations: [
            { id: 1, top: '35%', left: '52%', label: 'Sun Glasses', productId: 'p1' },
            { id: 2, top: '43%', left: '59%', label: 'Ear rings', productId: 'p1' },
            { id: 3, top: '85%', left: '45%', label: 'T-Shirt', productId: 'p2' },
          ],
        },
      ],
      products: [
        { id: 'p1', name: 'T-Shirt', image: '', detailPageUrl: '/product/1' },
        { id: 'p2', name: 'Pants', image: '', detailPageUrl: '/product/2' },
        { id: 'p3', name: 'Shoes', image: '', detailPageUrl: '/product/3' },
      ],
    },
    {
      id: '4',
      media: [
        {
          id: 'm1',
          type: 'video',
          url: 'https://videos.pexels.com/video-files/13929658/13929658-uhd_1440_2560_24fps.mp4',
          annotations: [],
        },
      ],
      products: [
        { id: 'p1', name: 'T-Shirt', image: '', detailPageUrl: '/product/1' },
        { id: 'p2', name: 'Pants', image: '', detailPageUrl: '/product/2' },
        { id: 'p3', name: 'Shoes', image: '', detailPageUrl: '/product/3' },
      ],
    },
  ];




  