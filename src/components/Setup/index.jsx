import React from "react";
import Crumb from "../utils/Crumb";

const Setup = () => {
  const btn = {};
  btn["--btn"] = "#000";
  btn["--btn-color"] = "#fff";
  return (
    <main>
      <Crumb name={"Setup"} />
      <section className="height">
        <div className="container mt-5">
          <div className="ribbon">
            Create a Platform
          </div>
          <div className=" ">
            <p>
              <b>Step01:</b> Go here to{" "}
              <a rel="noreferrer" target="_blank" className="learn-more" style={btn} href="https://bit.ly/TTronOffer">Create Platform</a>
            </p>
            <p>
              <p>
                <b>Step02:</b>
              </p>
              <ol type="A">
                <li>Click on Sign up</li>
                <li>
                  On the popup page enter your Name, Email, phone, country,
                  state, and password.
                </li>
                <li>Select I agree box and click sign up</li>
              </ol>
            </p>
            <p>
              <b>Step03:</b> When you successfully sign up, go to your email
              inbox, and complete the email verification.
            </p>
          </div>
        </div>
      </section>
      <section className="height n2 a">
        <div className="container mt-5">
          <div className="ribbon">
            Create a Terminal
          </div>
          <div className=" ">
            <p>
              <b>Step01:</b> Go here {" "}
              <a rel="noreferrer" target="_blank" className="learn-more" style={btn} href="http://bit.ly/ABAlgoTrade">CREATE TERMINAL</a>
            </p>
            <p>
              <p>
                <b>Step02:</b>{" "}
                <span>
                  Enter your Name, Email address, State and Mobile number then
                  click open an account and complete the account opening
                  procedure.
                </span>
              </p>
              <p>
                <b>Required Documents to open the Trading Account</b>
              </p>
              <ol>
                <li>Pan card (image file)</li>
                <li>
                  Aadhar id (image file).{" "}
                  <b>Note: Aadhar must be linked to your mobile number</b>
                </li>
                <li>
                  Last 6 Months bank statement (Pdf file) with{" "}
                  <b>2000 rupees</b> minimum balance
                </li>
                <li>
                  Applicant’s specimen signature (image file).{" "}
                  <b>Note: same like as on the Pan card.</b>
                </li>
              </ol>
            </p>
            <p>
              <b>Step03:</b> Choose <b>Trade Pro</b>{" "}
              Plan (we need 10x leverage for the Algo trading) when it asks to
              choose the trading plan
            </p>
            <p>
              <b>Step04:</b> You will receive your user id and login password to
              your email address when the account opening procedure is completed
            </p>
          </div>
        </div>
      </section>
      <section className="height">
        <div className="container mt-5">
          <div className="ribbon">
            Subscribe to Retail Plan for Auto Trading
          </div>
          <div className=" ">
            <p>
              <b>Step01:</b> Go to subscriptions in TT from the top-right Menu
            </p>
            <p>
              <b>Step02:</b>{" "}
              Click change plan (<b>TT Subscription</b> - Exchange Set India)
            </p>
            <p>
              <b>Step03:</b> Make sure in the Exchange sets India is selected
              and click choose plan under retail
            </p>
            <p>
              <b>Step04:</b> Enter the contact number and complete the
              subscription
            </p>
          </div>
        </div>
      </section>
      <section className="height n2 b">
        <div className="container mt-5">
          <div className="ribbon">
            Change your AB Broker 2FA passwords to same answer
          </div>
          <div className=" ">
            <p>
              <b>Step01:</b> Go to Ant AB website and directly click forgot
              password.
              <ol>
                <li>Enter Client ID, Email ID, and Pan Number </li>
                <li>Select Reset 2FA </li>
                <li>Click Reset</li>
              </ol>
            </p>
            <p>
              <b>Step02:</b>
              Again go to Ant AB website and enter client Id and Password
              <ul>
                <li>Click secure sign-in</li>
                <li>
                  Now answer all five questions with same answer and submit
                </li>
                <li>
                  <b>Example:</b>
                  <ul>
                    <li>What is your first car brand: apple</li>
                    <li>What is your first mobile brand: apple</li>
                    <li>What is your birth year: apple</li>
                    <li>What is your friend name: apple</li>
                    <li>What is your favoriate food: apple</li>
                  </ul>
                </li>
              </ul>
            </p>
            <p>
              <b>Step03:</b> Login again with the new 2FA password
            </p>
          </div>
        </div>{" "}
      </section>
      <section className="height">
        <div className="container mt-5">
          <div className="ribbon">
            Configure your Trading Account with TT
          </div>
          <div className=" ">
            <p>
              <b>Step01:</b> Go here{" "}
              <a rel="noreferrer" target="_blank" className="learn-more" style={btn} href="http://bit.ly/ABConfig">Configure</a>
            </p>
            <p>
              <b>Step02:</b>
              Follow the setup instructions and complete the configuration
              <br />
              <b>Note:</b>
              <ol type="A">
                <li>
                  Put your AB Client ID in the client id tab & write random
                  letters in client secret and token.
                </li>
                <li>
                  Enter your AB user id, AB password and AB 2FA password (EX:
                  apple) under Auto login. If you do not enter these details you
                  will have to generate a token every day before the trading
                  starts.
                </li>
                <li>
                  <b className="text-danger">
                    Please don’t use NEST Software or ANT Desk software on your
                    PC. You are allowed to use only ANT Mobi mobile application
                    and ant.abonline website during trading hours.
                  </b>
                </li>
              </ol>
            </p>
          </div>
        </div>
      </section>
      <section className="height">
        <div className="container mt-5">
          <div className="ribbon">
            Setup your first algo trade
          </div>
          <div className=" ">
            <p>
              <b>Step01:</b> Go to Marketplace in TT from Top Center Menu under
              Strategies and search ‘‘Penguin Cave // SOURCE’’
            </p>
            <p>
              <b>Step02:</b>
              Click on Subscribe
            </p>
            <p>
              <b>Step03:</b>
              Go to the “My Strategies” page from Top Center Menu under
              Strategies and find the above strategy under “Subscribed.”
            </p>
            <p>
              <b>Step04:</b>
              Click on Deploy. Choose the default settings of “Paper Trading”
              and “TT-PaperTrading” to begin. When you are comfortable with the
              strategy, you can deploy it live Auto in your Trading account.
            </p>
            <p>
              <b>Step05:</b>
              To track the strategy on the “Deployed” page. If it shows active,
              it means it’s working well. During market hours, this strategy
              will take some positions daily.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Setup;
