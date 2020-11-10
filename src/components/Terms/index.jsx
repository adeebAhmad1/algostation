import React from "react";
import Crumb from "../utils/Crumb";

const Terms = ({history}) => {
  return (
    <div className="back">
      <Crumb name="Terms & Conditions" />
      <section className="height">
        
      </section>
      <div className="outer_div">
      <div className="cover" onClick={()=> history.goBack()}></div>
      <div
        className="inner_div p-4"
        style={{ overflowY: `scroll`, maxHeight: `70vh`, borderRadius: `1rem` }}
      >
        <h3 className="text-primary font-weight-bold text-center">Risk Disclaimers</h3>
        <p>
          Algorithmic trading involves a substantial risk of loss and is not
          appropriate for everyone. No representation is being made that
          utilizing the algorithmic trading strategy will result in profitable
          trading or be free of risk of loss. Before deciding to trade or invest
          you should carefully consider your investment objectives, level of
          experience, and ability to tolerate risk. The possibility exists that
          you could sustain a loss of some or all your initial investment. Only
          risk capital should be used. The information found on the Algo
          Station, Ltd. (“Algo Station”) website was prepared without regard to
          any investor’s investment objectives, financial situation, or needs.
          Accordingly, investors should not act on any information in this
          document without obtaining specific advice from their financial
          advisors and should not rely on information herein as the basis for
          their investment decisions.
        </p>
        <p>
          <b>(A)</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Algo
          Station website is presented for informational purposes only. Any
          opinions, news, research, analyses, prices, reports, graphs, charts,
          links to third party websites, or other information contained herein
          is provided for informational purposes only and does not constitute
          investment advice or recommendations. Algo Station is not liable for
          any loss or damage, including without limitation, any loss of profit,
          which may arise directly or indirectly from use of or reliance on any
          such information.
        </p>
        <p>
          <b>(B)</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The
          information provided on the Algo Station website is for personal,
          non-commercial use. Neither the information nor any opinion contained
          in the Algo Station website constitutes a solicitation or offer by
          Algo Station or its affiliates and partners to buy or sell any
          futures, options on futures or securities of any kind or provide any
          investment advice or service. The information on the Algo Station
          website is not intended to be used as the primary font-weight-bold basis of investment
          decisions. The Algo Station website does not provide specific
          investment advice to any individual viewing the content of the website
          and does not represent that the services described herein are suitable
          for any specific investor.
        </p>
        <p>
          <b>(C)</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trading or
          investing carries a high level of risk, and may not be suitable for
          all persons. Before deciding to trade or invest you should carefully
          consider your investment objectives, level of experience, and ability
          to tolerate risk. The possibility exists that you could sustain a loss
          of some or all your initial investment and, therefore, you should not
          invest money that you cannot afford to lose. You should be aware of
          all the risks associated with trading and investing, and seek advice
          from an independent financial advisor if you have any doubts. Past
          performance is not necessarily indicative of future results.
        </p>
        <p>
          <b>(D)</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The
          information provided on the Algo Station website is not intended for
          distribution to, or use by, any person or entity in any jurisdiction
          or country where such distribution or use would be contrary to law or
          regulation or which would subject Algo Station or its affiliates to
          any registration requirement within such jurisdiction or country. It
          is the responsibility of Users of this information to ascertain the
          terms of and comply with any local law or regulation to which they are
          subject.
        </p>
        <p>
          <b>(E)</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The
          information on the Algo Station website, including any links to third
          party websites and the content thereon, is not guaranteed as to
          accuracy, completeness, or timeliness, and such information is subject
          to change at any time without notice, and is provided for the sole
          purpose of education and assistance in making independent investment
          decisions. Algo Station has taken reasonable measures to ensure the
          accuracy of the information contained herein; however, Algo Station
          does not guarantee its accuracy, and is not liable for any loss or
          damage which may arise directly or indirectly from such content or
          from an inability to access such information, for any delay in or
          failure of the transmission or the receipt of any instruction or
          notification in connection therewith.
        </p>
        <p>
          <b>(F)</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Information
          contained on the Algo Station website, including pricing, valuation,
          and commentary on specific products, if any, reflects the authors’
          analysis and other information available as of the publication date
          indicated. Furthermore, any news, opinions, commentaries, opinions,
          data, pricing, links to third party websites, and all other
          information contained on the Algo Station website are believed to be
          reliable, but Algo Station cannot and does not guarantee its accuracy,
          timeliness, or completeness. Algo Station expressly disclaims any
          warranties of merchantability or fitness for a particular purpose.
          Algo Station will not be responsible for any loss or damage that could
          result from interception by third parties of any information
          transmitted electronically or otherwise in connection with this
          website.
        </p>
        <p>
          <b>(G)</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Neither Algo
          Station, nor any of its affiliates, directors, officers or employees,
          nor any third party vendor or service provider will be liable or have
          any responsibility of any kind for any loss or damage that you incur
          in the event of any failure or interruption of this website, or
          resulting from the act or omission of any other party involved in
          making this website, or the website’s data, available to you, or from
          any other cause relating to your access to, inability to access, or
          use of the website or these materials, whether or not the
          circumstances giving rise to such cause may have been within the
          control of Algo Station or of any vendor providing software or
          services support.
        </p>
        <p>
          <b>(H)</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hypothetical
          trading results may appear on the Algo Station website. Please be
          advised that: <br />
          <br/>
          HYPOTHETICAL PERFORMANCE RESULTS HAVE MANY INHERENT LIMITATIONS, SOME
          OF WHICH ARE DESCRIBED BELOW. NO REPRESENTATION IS BEING MADE THAT ANY
          ACCOUNT WILL OR IS LIKELY TO ACHIEVE PROFITS OR LOSSES SIMILAR TO
          THOSE SHOWN; IN FACT, THERE ARE FREQUENTLY SHARP DIFFERENCES BETWEEN
          HYPOTHETICAL PERFORMANCE RESULTS AND THE ACTUAL RESULTS SUBSEQUENTLY
          ACHIEVED BY ANY PARTICULAR TRADING PROGRAM. ONE OF THE LIMITATIONS OF
          HYPOTHETICAL PERFORMANCE RESULTS IS THAT THEY ARE GENERALLY PREPARED
          WITH THE BENEFIT OF HINDSIGHT. IN ADDITION, HYPOTHETICAL TRADING DOES
          NOT INVOLVE FINANCIAL RISK, AND NO HYPOTHETICAL TRADING RECORD CAN
          COMPLETELY ACCOUNT FOR THE IMPACT OF FINANCIAL RISK OF ACTUAL TRADING.
          FOR EXAMPLE, THE ABILITY TO WITHSTAND LOSSES OR TO ADHERE TO A
          PARTICULAR TRADING PROGRAM IN SPITE OF TRADING LOSSES ARE MATERIAL
          POINTS WHICH CAN ALSO ADVERSELY AFFECT ACTUAL TRADING RESULTS. THERE
          ARE NUMEROUS OTHER FACTORS RELATED TO THE MARKETS IN GENERAL OR TO THE
          IMPLEMENTATION OF ANY SPECIFIC TRADING PROGRAM WHICH CANNOT BE FULLY
          ACCOUNTED FOR IN THE PREPARATION OF HYPOTHETICAL PERFORMANCE RESULTS
          AND ALL OF WHICH CAN ADVERSELY AFFECT TRADING RESULTS.
        </p>
        <h5 className="text-primary font-weight-bold text-center">
          Third Party Websites and Services
        </h5>
        <p>
          <b>(A)</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Algo
          Station website may contain links to third party websites, which are
          owned and operated by unaffiliated third parties, and may contain
          offers for various products, services, or information (collectively
          referred to as “Third Party Services”). Algo Station is not
          responsible for the contents of any such linked sites and does not
          assume any responsibility for the accuracy or appropriateness of the
          information contained on such sites. The inclusion of any link does
          not imply endorsement by Algo Station. No claims are made as to
          reliability of past, present or future profitability in connection
          with the use of any of these Third-Party Services. Algo Station does
          not guarantee that use of these Third-Party Services will generate or
          result in any profits.
        </p>
        <p>
          <b>(B)</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User
          acknowledges that Third Party Services are produced and owned by third
          parties, and not Algo Station, and that Algo Station disclaims any
          responsibility for any Third-Party Services provided to User. User is
          responsible for conducting his or her own due diligence with respect
          to any Third-Party Service utilized by User. User assumes all
          risk/liability for such Third-Party Service.
        </p>
        <p>
          <b>(C)</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Algo Station
          makes no representations or warranties whatsoever, expressed, or
          implied, as to the accuracy, completeness, timeliness,
          appropriateness, suitability, or fitness for any purpose or use of
          such Third-Party Services, products, services and information,
          customer and technical support or web presence or any of their
          presentations or representations. User acknowledges and agrees that
          Algo Station shall not be liable in any way for the use of such
          Third-Party Services.
        </p>
        <p>
          <b>(D)</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;User
          acknowledges and agrees that this Agreement grants User no rights or
          licenses with respect to any Third-Party Service, and User agrees that
          use of any Third-Party Services shall be in accordance with any
          agreements or other governing rules applicable to such Third-Party
          Services. User acknowledges and agrees that Algo Station has no
          obligation to maintain or provide any updates to User regarding any
          changes to agreements related to Third Party Services. User is
          responsible for reading and understanding the terms and conditions and
          any other policies of any Third-Party Services utilized by User. Any
          questions related to such Third-Party Services should be directed to
          the third party providing the service.
        </p>
        <h5 className="text-primary font-weight-bold text-center">Waiver of Liability</h5>
        <p>
          User agrees that access to and use of information contained in the
          Algo Station website is at User’s risk, and User agrees that no claim
          shall be alleged or asserted against Algo Station or anyone affiliated
          therewith based on any allegation or contention that any of the
          information was deficient or inaccurate. In addition, any reference to
          any Third-Party Service at or on the Algo Station website or any
          linked site is not an express or implied endorsement by Algo Station.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Terms;
