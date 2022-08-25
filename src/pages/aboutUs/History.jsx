import React from "react";
import Footer from "../../componenets/footer/Footer";
import NavBar from "../../componenets/headers/NavBar";
import "./About.css";
export default function History() {
  return (
    <>
      <NavBar />
      <div>
        <div className="about_section">
          <div className="left_part">
            <h2 className="title">History</h2>
            <p>
              The beginning of formal technical education in India can be dated
              back to the mid-19th century. Major policy initiatives in the
              pre-independence period included the appointment of the Indian
              Universities Commission in 1902, issue of the Indian Education
              Policy Resolution in 1904, and the Governor General’s policy
              statement of 1913 stressing the importance of technical education,
              the establishment of IISc in Bangalore, Institute for Sugar,
              Textile & Leather Technology in Kanpur, N.C.E. in Bengal in 1905,
              and industrial schools in several provinces. The beginning of
              formal technical education in India can be dated back to the
              mid-19th century. Major policy initiatives in the pre-independence
              period included the appointment of the Indian Universities
              Commission in 1902, issue of the Indian Education Policy
              Resolution in 1904, and the Governor General’s policy statement of
              1913 stressing the importance of technical education, the
              establishment of IISc in Bangalore, Institute for Sugar, Textile &
              Leather Technology in Kanpur, N.C.E. in Bengal in 1905, and
              industrial schools in several provinces.
            </p>
          </div>
          <div className="right_part">
            <h2 className="imp_date">Importants Dates</h2>

            <p>1943</p>
            <span className="small_text">
              Constitution of the Technical Education Committee of the Central
              Advisory Board of Education (CABE) 1944 Preparation of the
              Sergeant Report 1945 Formation of the All India Council for
              Technical Education (AICTE).
            </span>
            <p>1944</p>
            <span className="small_text">
              Constitution of the Technical Education Committee of the Central.
            </span>
            <p>1945</p>
            <span className="small_text">
              Constitution of the Technical Education Committee of the Central
              Advisory Board of Education.
            </span>
          </div>
        </div>

        <div className="about_section_2">
          <div className="left_part_2">
            <h2 className="title_2">Initial Set Up</h2>
            {/* <div className="left_part_2"> */}
            <p className="small_text">
              All India Council for Technical Education (AICTE) was set up in
              November 1945 as a national-level apex advisory body to conduct a
              survey on the facilities available for technical education and to
              promote development in the country in a coordinated and integrated
              manner. And to ensure the same, as stipulated in the National
              Policy of Education (1986), AICTE was vested with:
            </p>
            <ul>
              <li className="small_text_2">
                Statutory authority for planning, formulation, and maintenance
                of norms.
              </li>
              <li className="small_text_2">
                standards Quality assurance through accreditation Funding in
                priority areas.
              </li>
              <li className="small_text_2">
                awards The management of technical education in the country
              </li>
              <li className="small_text_2">
                monitoring, and evaluation Maintaining parity of certification
              </li>
            </ul>
            {/* </div> */}
          </div>
          <div className="right_part_2">
            <iframe
              width="400"
              height="280"
              src={`https://www.youtube.com/embed/WkMC8Iachrw`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
            <h3>APPROVAL PROCESS 2020-21</h3>
            <p>AICTE e-Governance</p>
          </div>
        </div>

        <div className="about_section_3">
          <div className="left_part_3">
            <img src="" alt="" />
          </div>
          <div className="right_part_3">
            <h2 className="title">Role of National Working Group</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quam quibusdam nesciunt eveniet libero tempora quisquam amet
              architecto. Quo quam eveniet molestiae natus labore sint
              reprehenderit ullam omnis nulla illum? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. A illo facere error eius. Quidem
              repudiandae voluptatum quis minus asperiores ratione voluptates
              alias in, veniam ad suscipit aspernatur sint fugit blanditiis.
            </p>
            <h2 className="title">
              The All India Council For Technical Education Act 1987
            </h2>
            <p>(No 52 of 1987 as passed by both the Houses of Parliament)</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              quam quibusdam nesciunt eveniet libero tempora quisquam amet
              architecto. Quo quam eveniet molestiae natus labore sint
              reprehenderit ullam omnis nulla illum? Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. A illo facere error eius. Quidem
              repudiandae voluptatum quis minus asperiores ratione voluptates
              alias in, veniam ad suscipit aspernatur sint fugit blanditiis.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
