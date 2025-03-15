// import AppTemplate from "./AppTemplate";

// export const Instagram: React.FC = () => {
//   return (
//     <AppTemplate
//       name="Instagram"
//       image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Instagram_logo.png/800px-Instagram_logo.png"
//       description="Instagram is a photo and video-sharing social networking service owned by Facebook, Inc."
//       systemRequirements={["iOS 12.0 or later", "Android 6.0 or later"]}
//       screenshots={[
//         "https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png",
//         "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
//         "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg",
//       ]}
//         additionalInfo="Instagram was created by Kevin Systrom and Mike Krieger and launched in October 2010. The app allows users to upload photos and videos, which can be edited with filters and organized with tags and location information. Users can browse other users' content by tags and locations, and view trending content. Users can like photos and follow other users to add their content to their feed."
//     />
//   );
// };







import React from "react";
import { useParams, useLocation } from "react-router-dom";
import AppTemplate from "./AppTemplate";

interface ProductPageProps {}

const ProductPage: React.FC<ProductPageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const productData = location.state;

  if (!productData) {
    return <div className="text-center p-10">Product not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <AppTemplate
        name={productData.name}
        image={productData.image}
        description={productData.description}
        systemRequirements={productData.systemRequirements}
        screenshots={productData.screenshots}
        additionalInfo={productData.additionalInfo}
      />
    </div>
  );
};

export default ProductPage;