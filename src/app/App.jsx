import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          {/* <img src="logo.png" alt="Unbanking Logo" /> */}
          <span>Unbanking</span>
        </div>
        <nav className="nav">
          <a href="#learn">Learn</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#get-early-access" className="cta">
            Get Early Access
          </a>
        </nav>
      </header>
      <main className="main">
        <div className="content">
          <h1>Earn Passive Income from Crypto - Up to 25% APY</h1>
          <p>
            Let professional traders manage your funds. Experience a simple,
            secure, and community-driven way to grow your wealth.
          </p>
          <div className="buttons">
            <button className="btn-primary">Get Early Access</button>
            <button className="btn-secondary">Learn more</button>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <span className="card-title">
              Amplify Transformational Data Sharing ETF
            </span>
            <span className="card-subtitle">by Liam Trading</span>
          </div>
          <div className="card-body">
            <div className="card-info">
              <span className="card-amount">$735 million</span>
              <span className="card-status">5.63% Active</span>
            </div>
            <div className="card-details">
              <span className="card-return">Return 21%</span>
              <span className="card-risk">Risk 4/5</span>
            </div>
            <div className="card-crypto">
              <span>Ethereum</span>
            </div>
            <div className="card-performance">
              {/* <img src="performance.png" alt="Performance Chart" /> */}
            </div>
            <div className="card-footer">
              <span className="card-fee">Fee 1% / 12%</span>
              <button className="btn-buy">Buy</button>
            </div>
          </div>
        </div>
      </main>
      <section className="page2">
        <div className="page2-content">
          <h1>
            We are revolutionizes crypto asset management by leveraging
            blockchain for secure, decentralized financial services.
          </h1>
          <p>
            Experience the potential for returns through profit-sharing with
            expert crypto traders, enhancing your financial freedom and control
            without traditional banks.
          </p>
        </div>
      </section>
      <section className="page3">
        <div className="page3-content">
          <div className="page3-text">
            <h2>100+ Assets. Endless Opportunities.</h2>
            <p>
              Step into a world of choice with our extensive range of over 100
              assets, covering diverse categories and multiple chains.
            </p>
          </div>
          <div className="page3-icons">
            {/* <img src="path_to_icon_1" alt="Icon 1" />
      <img src="path_to_icon_2" alt="Icon 2" />
      <img src="path_to_icon_3" alt="Icon 3" />
      <img src="path_to_icon_4" alt="Icon 4" />
      <img src="path_to_icon_5" alt="Icon 5" />
      <img src="path_to_icon_6" alt="Icon 6" />
      <img src="path_to_icon_7" alt="Icon 7" />
      <img src="path_to_icon_8" alt="Icon 8" />
      <img src="path_to_icon_9" alt="Icon 9" />
      <img src="path_to_icon_10" alt="Icon 10" />
      <img src="path_to_icon_11" alt="Icon 11" />
      <img src="path_to_icon_12" alt="Icon 12" />
      <img src="path_to_icon_13" alt="Icon 13" />
      <img src="path_to_icon_14" alt="Icon 14" />
      <img src="path_to_icon_15" alt="Icon 15" />
      <img src="path_to_icon_16" alt="Icon 16" />
      <img src="path_to_icon_17" alt="Icon 17" />
      <img src="path_to_icon_18" alt="Icon 18" />
      <img src="path_to_icon_19" alt="Icon 19" />
      <img src="path_to_icon_20" alt="Icon 20" />
      <img src="path_to_icon_21" alt="Icon 21" />
      <img src="path_to_icon_22" alt="Icon 22" />
      <img src="path_to_icon_23" alt="Icon 23" />
      <img src="path_to_icon_24" alt="Icon 24" />
      <img src="path_to_icon_25" alt="Icon 25" />
      <img src="path_to_icon_26" alt="Icon 26" />
      <img src="path_to_icon_27" alt="Icon 27" />
      <img src="path_to_icon_28" alt="Icon 28" />
      <img src="path_to_icon_29" alt="Icon 29" />
      <img src="path_to_icon_30" alt="Icon 30" /> */}
          </div>
        </div>
      </section>
      <section className="page4">
        <div className="page4-content">
          <h2>Why Choose Unbanking.io?</h2>
          <div className="page4-features">
            <div className="page4-feature">
              {/* <img src="path_to_icon_1" alt="Passive Income Icon" /> */}
              <h3>Passive Income</h3>
              <p>
                Invest your crypto assets and let the professionals do the work.
                Sit back and watch your investments grow.
              </p>
            </div>
            <div className="page4-feature">
              {/* <img src="path_to_icon_2" alt="Professional Traders Icon" /> */}
              <h3>Professional Traders</h3>
              <p>
                We partner with vetted, top-performing traders. You get to
                choose your favorite trader to manage your investments.
              </p>
            </div>
            <div className="page4-feature">
              {/* <img src="path_to_icon_3" alt="Transparency Icon" /> */}
              <h3>Transparency</h3>
              <p>
                Every transaction and trade executed by the trader is visible on
                the blockchain, allowing you to track your investments with
                complete clarity.
              </p>
            </div>
            <div className="page4-feature">
              {/* <img src="path_to_icon_4" alt="Security Icon" /> */}
              <h3>Security</h3>
              <p>
                Your funds are securely locked in smart contracts, ensuring they
                cannot be withdrawn by anyone.
              </p>
            </div>
            <div className="page4-feature">
              {/* <img src="path_to_icon_5" alt="Preferred Crypto Icon" /> */}
              <h3>Earn in Your Preferred Crypto</h3>
              <p>
                Your profits are paid in the currency you deposit, such as ETH,
                BNB, SOL, USDT, and more.
              </p>
            </div>
            <div className="page4-feature">
              {/* <img src="path_to_icon_6" alt="No Hidden Fees Icon" /> */}
              <h3>No Hidden Fees</h3>
              <p>
                Enjoy a transparent fee structure where you only pay a small
                percentage of your profits, with no monthly fees.
              </p>
            </div>
            <div className="page4-feature">
              {/* <img src="path_to_icon_7" alt="Automatic Payouts Icon" /> */}
              <h3>Automatic Payouts</h3>
              <p>
                Profits are automatically paid out at the end of the investment
                period through smart contracts.
              </p>
            </div>
            <div className="page4-feature">
              {/* <img src="path_to_icon_8" alt="Unlock DeFi Icon" /> */}
              <h3>Unlock DeFi</h3>
              <p>
                Experience financial freedom with peer-to-peer transactions and
                full control over your assets, bypassing traditional
                intermediaries.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="page5">
        <div className="page5-content">
          <h2>How it works</h2>
          <div className="page5-steps">
            <div className="page5-step">
              {/* <img src="path_to_icon_1" alt="Select Your Fund Icon" /> */}
              <h3>STEP 1</h3>
              <h4>Select Your Fund</h4>
              <p>
                Choose a fund managed by a professional trader. You’ll see key
                details like the type of cryptocurrency, expected annual
                returns, the investment period, and the trader's strategy. All
                traders are verified and transparent.
              </p>
            </div>
            <div className="page5-step">
              {/* <img src="path_to_icon_2" alt="Invest and Relax Icon" /> */}
              <h3>STEP 2</h3>
              <h4>Invest and Relax</h4>
              <p>
                Deposit your cryptocurrency into the chosen fund. Your funds are
                securely locked in a smart contract until the investment period
                ends. Expert traders manage your investment, aiming to maximize
                your returns. You can monitor your investment in real-time with
                complete transparency.
              </p>
            </div>
            <div className="page5-step">
              {/* <img src="path_to_icon_3" alt="Receive Your Profits Icon" /> */}
              <h3>STEP 3</h3>
              <h4>Receive Your Profits</h4>
              <p>
                At the end of the investment period, your profits are
                automatically sent to your wallet in the same cryptocurrency you
                invested. For example, if you invest 100 SOL at a 25% annual
                return, you’ll receive 112.5 SOL after 180 days. If the value of
                the cryptocurrency increases, your returns in USDT could be even
                higher.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="page6">
        <div className="page6-content">
          <div className="page6-left">
            <img
              src="path_to_logo_image"
              alt="Unbanking Logo"
              className="page6-logo"
            />
            <p>FOLLOW US ON</p>
            <div className="page6-social-icons">
              <a href="#">
                {/* <img src="path_to_twitter_icon" alt="Twitter" /> */}
              </a>
              <a href="#">
                {/* <img src="path_to_discord_icon" alt="Discord" /> */}
              </a>
              <a href="#">
                {/* <img src="path_to_linkedin_icon" alt="LinkedIn" /> */}
              </a>
              <a href="#">
                {/* <img src="path_to_instagram_icon" alt="Instagram" /> */}
              </a>
              <a href="#">
                {/* <img src="path_to_github_icon" alt="GitHub" /> */}
              </a>
            </div>
            <p>Unbanking© 2024</p>
          </div>
          <div className="page6-right">
            <div className="page6-column">
              <h3>COMPANY</h3>
              <a href="#">About</a>
              <a href="#">FAQ</a>
              <a href="#">Blog</a>
              <a href="#">Docs</a>
              <a href="#">How it Works</a>
            </div>
            <div className="page6-column">
              <h3>SUPPORT</h3>
              <a href="#">Add text</a>
              <a href="#">Team</a>
              <a href="#">Terms of Use</a>
              <a href="#">Feedback</a>
              <a href="#">Contact</a>
            </div>
            <div className="page6-column">
              <h3>LEGAL</h3>
              <a href="#">Add text</a>
              <a href="#">Add text</a>
              <a href="#">Terms of Use</a>
              <a href="#">Feedback</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
