import GSAPWrapper from "@layouts/components/GSAPWrapper";
import Features from "@layouts/partials/Features";
import HomeBanner from "@layouts/partials/HomeBanner";
import SeoMeta from "@layouts/partials/SeoMeta";
import SpecialFeatures from "@layouts/partials/SpecialFeatures";
import Testimonial from "@layouts/partials/Testimonial";
import Pricing from "@layouts/partials/pricing"; // 1. Import the Pricing component
import { getListPage } from "@lib/contentParser";

const Home = async () => {
  const homepage = await getListPage("content/_index.md");
  const { frontmatter } = homepage;
  
  // 2. Added 'pricing' to the destructured variables
  const { banner, brands, features, intro, speciality, testimonial, pricing } =
    frontmatter;

  return (
    <GSAPWrapper>
      <SeoMeta title="Home" />
      <HomeBanner banner={banner} brands={brands} />
      
       <Features features={features} /> 
      {pricing && <Pricing pricing={pricing} />}

      {/*<SpecialFeatures speciality={speciality} />*/}
      {/*<Testimonial testimonial={testimonial} />*/}
    </GSAPWrapper>
  );
};

export default Home;
