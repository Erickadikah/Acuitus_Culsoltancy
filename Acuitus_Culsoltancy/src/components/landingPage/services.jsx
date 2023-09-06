import React, { useEffect, useRef } from "react";
import Navbar from "./nav";
import "../../assets/styles/landingPage/services.scss";
// import Card from "./services-card";
import ContactUs from "./contactUs";
import { useState } from "react";
// import Footer from "./footer";
// import Contactform from "./contactForm";
import AboutFooter from "./aboutFooter";
import { motion } from "framer-motion";
import ServCards from "./test";
import Form from "./form";
import Contactform from "./contactForm";
import Lottie from "lottie-web";
import animationData from "../../assets/animation/servicesanim.json";

const Services = () => {
  const container = useRef(null);

  useEffect(() => {
    const animation = Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    // Return a cleanup function to stop the animation when the component unmounts
    return () => {
      animation.destroy();
    };
  }, []);

  const [activeCard, setActiveCard] = useState(null);
  const [content, setContent] = useState([
    {
      id: "activities",
      image:
        "https://www.intelli-wealth.com/assets/images/single_service_01.jpg",
      title: "Activations ",
      body: "In the world of business and innovation, the Activation service we provide goes beyond mere execution – it's about creating experiences that resonate. We understand that bringing an idea to life requires careful orchestration, and that's where our expertise shines. From immersive events to captivating product launches, our Activation service transforms concepts into tangible moments that engage, inspire, and leave a lasting impact.",
      point: [
        {
          title: "Product Launch Activations",
          description:
            "We specialize in creating buzz and excitement around new products. From dynamic launch events to interactive demonstrations, we ensure that your product grabs the attention it deserves and resonates with your target audience",
        },
        {
          title: "Brand Experience Centers",
          description:
            "We design and execute brand experience centers that leave a lasting impact.",
        },
        {
          title: "Influencer Collaborations",
          description:
            "Leveraging the power of influencers can amplify your brand's reach. We collaborate with influencers who align with your values, creating memorable activations that showcase your products or services to their engaged audiences.",
        },
        {
          title: "Community Engagement Initiatives",
          description:
            "Engaging with the community can establish strong connections and build loyalty. We design activations that foster meaningful relationships with your local audience through events, workshops, and initiatives that give back",
        },
        {
          title: "Digital Experiences",
          description:
            "The virtual realm offers endless possibilities for activations. Whether it's a virtual launch, webinar, or immersive online experience, we leverage digital platforms to create engaging moments that transcend physical boundaries",
        },
        {
          title: "Measurement and Analysis",
          description:
            "We believe in the power of data. Our team conducts rigorous analysis to measure the impact of your activations, providing you with valuable insights that inform future strategies",
        },
      ],
    },
    {
      id: "resource",
      image:
        "https://www.intelli-wealth.com/assets/images/single_service_02.jpg",
      title: "Resource Mobilization",
      body: "In the pursuit of growth, securing the necessary resources is a pivotal step. At Acuitus Duo Company,\
      we excel in crafting resource mobilization strategies that not only facilitate access to vital resources but also lay the groundwork for sustainable development.\
      Our approach to resource mobilization is a carefully orchestrated process that harnesses expertise, connections, and innovation.\
      Strategic Assessment: Our resource mobilization experts begin by conducting a comprehensive assessment of your organizations needs,\
      objectives, and growth plans. This strategic evaluation forms the foundation for devising tailored resource mobilization strategies that align with your vision.",
      point: [
        {
          title: "Partnership Cultivation",
          description:
            "Leveraging our extensive network, we identify and cultivate partnerships with organizations, institutions, and individuals who share a vested interest in your success. These partnerships extend beyond financial backing to encompass knowledge-sharing, mentorship, and collaborative initiatives that amplify your impact.",
        },
        {
          title: "Investor Engagement",
          description:
            "Our team engages with potential investors who are aligned with your mission and values. We craft compelling pitches and presentations that effectively communicate the potential and value proposition of your initiatives. This personalized approach fosters meaningful connections that go beyond financial support, creating a network of advocates for your cause",
        },
        {
          title: "Opportunity Identification",
          description:
            "Resource mobilization is not just about funds; its about leveraging opportunities that contribute to your growth. We proactively identify grants, competitions, and programs that provide a platform for showcasing your work and accessing valuable resources.",
        },
      ],
    },
    {
      id: "project",
      image:
        "https://www.intelli-wealth.com/assets/images/single_service_03.jpg",
      title: "Project Management",
      body: "Agricultural finance is crucial to support the growth of the agricultural sector. Indeed, it is essential for food security, job creation, and overall economic growth. Agriculture investments are required to enable smallholder farmers and processors, many of them living in poverty, to improve on-farm productivity, post-harvest and processing practices, as well as improve trade and marketing of agricultural commodities",
    },
    {
      id: "capacity",
      image:
        "https://www.intelli-wealth.com/assets/images/single_service_02.jpg",
      title: "Capacity Building",
      body: "Our expertise extends to a wide spectrum of training and mentorship programs that cover critical areas such as Agribusiness, Value Addition,  Financial Literacy, Business Development,\
      Technology integration, Market Analysis, Financial Literacy,Linkages, Climate change and Disaster management,  Leadership and Healthcare Education. We also provide financial and market linkages, facilitating connections between groups and financial institutions as well as markets for their products.\
      Acuitus Duo Company excels in capacity building,\
      having successfully trained diverse groups such as Village Savings and Loan Associations,\
      Farmer Service Centers, business groups, and entrepreneurs, among others.  With our experienced trainers guiding the way,\
      our capacity-building initiatives empower individuals and organizations to achieve sustained growth and excellence.\
      We believe in equipping you with the knowledge and skills needed to navigate complex challenges and seize new opportunities.",
    },
    {
      id: "marketing",
      image:
        "https://www.intelli-wealth.com/assets/images/single_service_01.jpg",
      title: "Marketing",
      body: "In a rapidly evolving business landscape, effective marketing is the cornerstone of success. At Acuitus consultancy,\
      we specialize in crafting holistic marketing strategies that not only cater to your unique needs but also create a lasting impact.\
      Our approach is centered on a deep understanding of your brand, audience, and objectives,\
      allowing us to develop strategies that resonate and drive results.\
      Our marketing experts work closely with you to chart out a strategic roadmap that aligns with your goals. We analyze market trends, consumer behavior\
      and competitive landscapes to identify opportunities for differentiation and growth. This planning phase ensures that every marketing effort is purposeful and directed towards achieving tangible outcomes.",
      point: [
        {
          title: "Compelling Narratives",
          description:
            "Our creative team combines expertise in content creation, design, and communication to convey your brands values, vision, and offerings in a way that resonates with authenticity and emotion",
        },
        {
          title: "Multichannel Approach",
          description:
            "Our marketing strategies encompass a multichannel approach, leveraging platforms such as social media, digital advertising, content marketing, email campaigns, and more. This ensures that your message reaches your audience where they are, enhancing visibility and engagement.",
        },
        {
          title: "Data-Driven Insights",
          description:
            "This data-driven approach allows us to make informed refinements and optimizations, ensuring that your marketing efforts continually evolve to meet changing market dynamics",
        },
        {
          title: "Measurable Impact",
          description:
            "Our commitment to results is unwavering. We establish key performance indicators (KPIs) to measure the impact of each marketing campaign. Whether its brand awareness, lead generation, or customer engagement, we provide you with clear metrics that demonstrate the effectiveness of our strategies",
        },
      ],
    },
    {
      id: "research",
      image:
        "https://www.intelli-wealth.com/assets/images/single_service_01.jpg",
      title: "Research",
      body: "We  provide insights that help you make informed decisions. Our comprehensive research services encompass Product research, Market research, and Needs assessment.\
            These services offer a deeper understanding of your industry, enabling you to stay ahead of the curve and respond effectively to changing landscapes. Additionally,\
            we offer monitoring and evaluation services to track and measure the impact of your initiatives, ensuring your strategies remain aligned with your goals.",
      point: [
        {
          title: "Product Research",
          description:
            "In the realm of product research, we delve into understanding the specific offerings your organization brings to the market. This involves analyzing the features, benefits, and unique selling points of your products. Through comprehensive product research, we help you refine and optimize your offerings, ensuring they meet the needs and preferences of your target audience. This process allows you to create products that stand out and resonate within your industry.",
        },
        {
          title: "Market Research",
          description:
            "Market research involves a deep exploration of the market landscape in which your organization operates. We gather data and insights about your industry,\
      competitors, trends, customer behavior, and market dynamics. This information is crucial for identifying opportunities, potential challenges, and areas for growth.\
      By conducting thorough market research, we enable you to make strategic decisions based on a solid understanding of the markets current and future conditions",
        },
        {
          title: "Needs Assessment",
          description:
            "Needs assessment focuses on identifying the specific requirements and gaps within your target audience or community. By engaging with stakeholders and conducting surveys or interviews, we gain insights into the needs, preferences, and challenges of the people you aim to serve. This information guides the development of tailored solutions and strategies that address these needs effectively. Needs assessment ensures that your efforts are aligned with the real demands of your audience, enhancing the impact of your initiatives.",
        },
        {
          title: "Monitoring and Evaluation",
          description:
            "Our monitoring and evaluation services are designed to track the progress and effectiveness of your projects or programs over time. We establish key performance indicators (KPIs) and benchmarks to measure success and impact. Regular monitoring allows us to identify any deviations from the intended outcomes, enabling timely adjustments and improvements. Through rigorous evaluation, we provide you with a comprehensive understanding of the results achieved, facilitating data-driven decision-making and continuous enhancement.",
        },
      ],
    },
    {
      id: "branding",
      image:
        "https://www.intelli-wealth.com/assets/images/single_service_01.jpg",
      title: "Branding Services",
      body: "Your brand is more than just a logo or a name – it's the essence of what you stand for. At Acuitus Duo Company, we understand that a strong brand identity is the cornerstone of building a lasting impression and establishing meaningful connections. Our comprehensive branding services are designed to elevate your brand into a distinctive force that resonates with your audience and embodies your core values.",
      point: [
        {
          title: "Strategic Brand Assessment",
          description:
            "Our branding experts initiate the process by conducting a thorough assessment of your current brand identity. We analyze your messaging, visuals, positioning, and market perception. This strategic evaluation serves as the foundation for the brand transformation journey.",
        },
        {
          title: "Brand Strategy",
          description:
            "A powerful brand is built on authenticity and consistency. We collaborate closely with you to articulate your brand's values, mission, and vision. This process not only reinforces internal alignment but also ensures that your brand communicates a clear and compelling narrative to the outside world.",
        },
        {
          title: "Visual Identity Refinement",
          description:
            "The visual components of your brand are your visual ambassadors. From logo design to color palettes and typography, we refine and enhance these elements to align with your brand's personality and resonate with your target audience.\
          Storytelling through Branding: Your brand story is what makes you relatable and relatable. We help you craft a compelling brand story that goes beyond features and benefits, connecting on an emotional level with your audience. This narrative enriches the brand experience, fostering deeper connections and loyalty.",
        },
        {
          title: "Multichannel Brand Consistency",
          description:
            "A consistent brand presence across all touchpoints is essential for brand recognition. We ensure that your brand identity is seamlessly integrated into every aspect of your organization, from marketing materials and website design to social media and customer interactions.",
        },
        {
          title: "Engaging Brand Experiences",
          description:
            "We create strategies that drive meaningful engagement and interaction with your audience. These strategies range from experiential marketing initiatives to creating memorable brand moments that leave a lasting impact.",
        },
        {
          title: "Brand Evolution",
          description:
            "As your organization evolves, so should your brand. We offer ongoing support to adapt your brand identity to changing market dynamics, ensuring that your brand remains relevant, innovative, and captivating.",
        },
      ],
    },
  ]);
  const [showData, setShowData] = useState(() => content[0]);
  const [showPoint, setShowPoint] = useState(false);
  //render
  function renderActiveCard(id) {
    const activeCard = content.find((item) => item.id === id);
    setShowData(activeCard);
    setShowPoint(false);
  }

  function togglePoints() {
    setShowPoint(!showPoint);
  }

  return (
    <>
      <Navbar />
      <div className="service-header">
        <div className="background-layer">
          <div className="content">
            <h1
              className=" headerh1"
              style={{
                fontSize: "2.5rem",
              }}
            >
              Our Services
            </h1>
            <p
              style={{
                fontSize: "1rem",
              }}
            >
              GROW WITH US TODAY!
            </p>
          </div>
        </div>
      </div>
      <div className="serviced">
        <ServCards />
      </div>
      <Form />
      <div className="form-2">
      <h1 className="heading text-white">
      We bring your ideas to life
      </h1>
      <p className="my-tagline">
      Become our client and get the best services and emotions with us.
            </p>
        <Contactform />
      </div>
      <AboutFooter />
    </>
  );
};

export default Services;
