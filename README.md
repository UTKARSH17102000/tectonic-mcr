Lookbook React App
Overview

This project showcases a Lookbook feature for an e-commerce platform. It involves the following key components:

    Image/Video Media: Display images or videos of fashion products.
    Annotations: Add product annotations as dots on the images to highlight specific items.
    Progress Bar: For images, a 5-second progress bar that advances and triggers the transition to the next media.
    Previous/Next Media Navigation: Functionality to navigate between images and videos within the current look.
    Swipe Up/Down: For scrolling through multiple looks.
    Responsive Design: Optimized for mobile devices with a basic layout for desktop.

Features

    Display Images and Videos: The app can handle both images and videos within the Lookbook.
    Annotations: Images can have annotations that highlight specific products in the look.
    Progress Bar: A progress bar fills up over 5 seconds for images.
    Media Navigation: Users can click on left or right arrows to move between images/videos in a Look.
    Swipe Functionality: Users can swipe up and down to navigate between different looks.
    Mobile-First Design: The app is designed to be mobile-friendly.

Folder Structure

src/
│
├── components/
│   ├── ImageWithAnnotations.tsx    # Handles image rendering with annotations and media navigation
│   ├── LookBook.tsx                # Handles displaying a set of looks with images/videos
│   └── App.tsx                     # Main app component that ties everything together
│
├── data/
│   └── looksData.ts                # Mock data for looks and products
│
├── styles/
│   └── styles.css                  # Global styling
└── index.tsx                       # Entry point for the app

Installation

    Clone the repository:

git clone
cd lookbook-app

Install dependencies:

npm install

Start the development server:

    npm start

    Your application should now be running at http://localhost:3000.

Components
ImageWithAnnotations

This component displays an image (or video) along with annotations. The annotations are positioned on the image based on their top and left properties. It includes the following features:

    Progress Bar: A progress bar is displayed at the bottom of the image. It progresses over 5 seconds.
    Annotations: Dots are displayed over the image to represent highlighted products.
    Navigation Buttons: Previous and Next buttons allow users to navigate through media (images/videos).
    Automatic Transition: After 5 seconds, the media will automatically transition to the next.

Props

    imageUrl: The URL of the image to display.
    annotations: An array of annotation objects containing id, top, left, productId, and optionally label.
    onTimeComplete: A callback function that is called after the 5-second timer completes.
    onPreviousMedia: A callback function for navigating to the previous media.
    onNextMedia: A callback function for navigating to the next media.

Example Usage

<ImageWithAnnotations
  imageUrl={currentMedia.url}
  annotations={currentMedia.annotations || []}
  onTimeComplete={goToNextMedia}
  onPreviousMedia={goToPreviousMedia}
  onNextMedia={goToNextMedia}
/>

LookBook

The LookBook component displays a series of looks, each containing multiple media (images/videos). It supports the following features:

    Swipe Up/Down: The user can swipe up or down to navigate between looks.
    Media Navigation: Inside each look, the user can navigate between media using the previous and next buttons.

Example Usage

const [currentLookIndex, setCurrentLookIndex] = useState(0);
const currentLook = looksData[currentLookIndex];

<LookBook
  currentLook={currentLook}
  onPreviousLook={goToPreviousLook}
  onNextLook={goToNextLook}
/>

Data Structure

The data structure for the Lookbook is as follows:

interface Look {
  id: string;
  media: Media[];
  products: Product[];
}

interface Media {
  id: string;
  type: 'image' | 'video';
  url: string;
  annotations?: Annotation[];  // Only for images
}

interface Product {
  id: string;
  name: string;
  image: string;
  detailPageUrl: string;
}

interface Annotation {
  id: number;
  top: string;
  left: string;
  label?: string;
  productId: string;
}

Functional Flow

    Start with a Look: The user is shown the first look.
    Media Display: The first image/video is displayed with annotations.
    Timer & Progress Bar: After 5 seconds, the progress bar completes, and the app moves to the next media.
    Navigation: The user can manually click the Previous or Next buttons to navigate between media.
    Swipe Between Looks: The user can swipe up or down to change looks, and the current look's media is displayed.
    Annotation Click: Clicking on the annotation directs the user to the product detail page.

Styling

The components are styled using CSS. The key styles include:

    Progress Bar: Positioned at the bottom of the image with a smooth transition over 5 seconds.
    Navigation Buttons: Positioned on the left and right side of the image.
    Annotations: Dots placed at the specified top and left positions based on the annotation data.

Future Enhancements

    Video Control: Implement play/pause functionality for videos.
    Desktop Responsiveness: Add more detailed styling and responsiveness for desktop views.
    Real Data Integration: Replace mock data with real API data for looks, media, and products.

License

This project is licensed under the MIT License - see the LICENSE file for details.
Conclusion

This app provides a dynamic and interactive lookbook for showcasing fashion products. It uses React to manage the state of the media and annotations, ensuring a smooth and engaging experience for users navigating through products and looks.
