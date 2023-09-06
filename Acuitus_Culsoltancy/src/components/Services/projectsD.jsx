import React from "react";
import "../../assets/styles/services/projectsD.scss";
import Navbar from "../../components/landingPage/nav";

const ProjectsD = () => {
  return (
    <>
    <Navbar />
      <div className="project-holder">
        <div className="projects-background-layer">
          <div className="project-content">
            <h1 className="project-header heading">Projects</h1>
            <p style={{
                fontSize: "1rem",
                fontWeight: "bold",
            }}>Become Part of Us
            and Work Together!
            </p>
          </div>
        </div>
      </div>
      <div class="project-body">
        <div class="project-body-content">
          <h3 class="projects-head">
            <span class="project-span">1.</span>Training, mentorship program to
            VSLAS and FSCs
          </h3>
          <p class="explainer">
            Acuitus consultancy offered training and mentorship to more than
            4,000 Village Savings and Loan Associations (VSLAs) and over 1,000
            Farmer Service Centers (FSCs) in areas such as financial literacy,
            value addition, enterprise development, social networking, Projects
            and Achievements, agribusiness development, technology integration,
            and establishing connections. Some of the counties covered are
            Kisumu, Kakamega, Bungoma, Meru, Siaya, Nandi, Busia, Migori,
            Homa-Bay, Kisii and Murang'a.
            <br />
            We also provided financial and market linkages to these groups, thus
            promoting access to capital, which is essential for their growth and
            operations. Farmers were also linked to input providers to acquire
            quality seeds, fertilizers, and farm machinery, among other
            essentials.
          </p>
        </div>
        <div class="project-body-content">
          <h3 class="projects-head">
            <span class="project-span">2.</span>Group (Chama) Activations in
            Kenya’s local communities VSLAS and FSCs
          </h3>
          <p class="explainer">
            Partnering with Colgate, Acuitus engaged with local communities,
            providing training on oral health practices and the unique qualities
            of Colgate products. This initiative aimed to create brand
            awareness, enhance tooth-brushing habits, build relationships, and
            drive sales. The counties covered in this effort include Kakamega,
            Siaya, Kisumu, Busia, Bungoma, Kisii, Vihiga, Nyeri, Muranga,
            Nakuru, Kiambu, and Nyandarua.
          </p>
        </div>
        <div class="project-body-content">
          <h3 class="projects-head">
            <span class="project-span">3.</span>Comparative research on the
            benefits of Value Added Training in Village Savings and Loans
            Associations (VSLAs)
          </h3>
          <p class="explainer">
            The study targeted VSLA groups in 10 Kenyan counties and compared
            VSLAs that received value-added training with those that were solely
            trained on traditional VSLA methods. It explored various dimensions
            including financial literacy, savings behavior, Business Development
            Services (BDS) utilization, Income Generating Activities (IGA), loan
            management, and entrepreneurship engagement. Key findings
            highlighted the positive impact of value-added training on financial
            literacy, diversified investment behavior, BDS usage, IGA
            development, loan management practices, entrepreneurship engagement,
            and empowerment.
          </p>
        </div>
        <div class="project-body-content">
          <h3 class="projects-head">
            <span class="project-span">4.</span>Baseline Survey (Need
            assessment) on Newly established groups.
          </h3>
          <p class="explainer">
            The assessment comprehensively examined several key aspects within
            the VSLAs. The approach involved examining multiple key aspects
            within the VSLAs (Village Savings and Loan Associations) to gather
            information and identify their needs and requirements. The variable
            include their level of income, knowledge of financial management,
            availability of linkages, factors affecting their agribusiness
            activities, sources of income, value chain involvement, and
            identified support requirements.
          </p>
        </div>
        <div class="project-body-content">
          <h3 class="projects-head">
            <span class="project-span">5.</span>Market research/Study for ARIFU
          </h3>
          <p class="explainer">
            Acuitus Consultancy undertook a comprehensive market research
            initiative on behalf of ARIFU to gain valuable insights into the
            target market and inform strategic decision-making. Our approach
            involved a multifaceted data collection process, including surveys,
            interviews, and data analysis. We engaged with key stakeholders,
            including customers, competitors, and industry experts, to assess
            market trends, consumer preferences, and competitive dynamics.
            Through rigorous data analysis, we identified emerging opportunities
            and potential challenges, providing ARIFU with a clear understanding
            of the market landscape.
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectsD;
