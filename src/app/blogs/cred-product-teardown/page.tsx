"use client"

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CREDTeardown() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 px-8">
        <article className="max-w-4xl mx-auto py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            
            <h1 className="text-5xl font-bold text-text-primary mb-4">CRED Product Teardown - Product Improvement</h1>
            
            <div className="flex items-center gap-4 text-text-secondary mb-8">
              <span>March 20, 2024</span>
              <span>•</span>
              <span>15 min read</span>
            </div>

            <div className="space-y-8">
              <section>
                <p className="text-text-secondary text-m leading-relaxed">
                  CRED is a credit card bill payments app that provides value to its users with an ecosystem where one can link all their credit cards and make payments in a hassle-free way on a single platform. CRED aims to simplify credit card payments for its customers by making credit card bill payments simple, convenient, accessible & transparent. Apart from that there are some other services provided by CRED such as CREDmint, CREDrentpay and CREDprotect.
                </p>

                <div className="my-8">
                  <div className="relative">
                    <p className="text-text-primary font-medium">
                      <Link 
                        href="https://www.canva.com/design/DAGPTIXYuV8/3VifDzrKsRWHhvOtmMfokA/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-primary hover:text-text-secondary transition-colors"
                      >
                        CRED Product Teardown Presentation →
                      </Link>
                    </p>
                  </div>
                </div>

                <p className="text-text-secondary text-m leading-relaxed">
                  CRED honors its customers for responsible credit behavior by providing CRED coins on every transaction that is made by its customers. These CRED coins can in return be redeemed for the rewards and benefits offered by CRED on its platform in the form of cashback, discounts, exclusive deals, etc.
                </p>

                <p className="text-text-secondary text-m leading-relaxed mt-4">
                  From a business perspective you might wonder what is so special about CRED. In fact, you might feel even more suspicious about CRED&apos;s operations and its business model when you take a deeper look at its financials. CRED has incurred losses of ₹1279 CR in FY22 with a revenue of ₹422 CR. The answer lies in the potential of CRED&apos;s user base which I will discuss more in my conclusion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">Pain Points Identified by CRED</h2>
                <ul className="list-disc pl-6 space-y-2 text-text-secondary text-m">
                  <li>Difficulty in managing multiple credit cards and payments</li>
                  <li>Lack of understanding of spending habits and categories</li>
                  <li>High credit card bills and expenses</li>
                  <li>Hidden charges and fees by credit card companies</li>
                  <li>Complicated and unintuitive credit card management interfaces</li>
                  <li>Lack of knowledge and education on credit cards and healthy credit habits</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">Services Offered by CRED</h2>
                <ul className="list-disc pl-6 space-y-4 text-text-secondary text-m leading-relaxed">
                  <li><span className="font-semibold">Credit card bill payments all at one place</span> — CRED allows users to pay their credit card bills from one central platform, supporting payments for over 5,000 credit card billers in India.</li>
                  <li><span className="font-semibold">CRED Mint (P2P loan feature based on trust)</span> — CRED Mint is a P2P lending feature based on trust and reputation rather than credit scores or collateral, allowing users to borrow money from other CRED members.</li>
                  <li><span className="font-semibold">CRED RentPay</span> — CRED RentPay allows users to pay rent using their credit card, earning rewards points and cashback while managing multiple rent payments from one platform.</li>
                  <li><span className="font-semibold">CRED Protect</span> — CRED Protect is an insurance policy that covers users in case of credit card fraud or theft, providing peace of mind and financial protection.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">CRED Value Proposition</h2>
                <ul className="list-disc pl-6 space-y-4 text-text-secondary text-m leading-relaxed">
                  <li><span className="font-semibold">Easy Payment solutions</span> — CRED provides one stop payment platform for its users who have multiple credit cards.</li>
                  <li><span className="font-semibold">Analysis of expenses by categories</span> — CRED provides a breakdown of expenses by category to help users track their spending habits.</li>
                  <li><span className="font-semibold">Premium products for discounted bills</span> — CRED offers exclusive deals and discounts on dining, travel, and shopping that can be redeemed for discounted credit card bills.</li>
                  <li><span className="font-semibold">Shows hidden charges charged by credit card companies</span> — CRED highlights hidden charges and fees that credit card companies may charge.</li>
                  <li><span className="font-semibold">Clean UI/UX</span> — CRED offers a user-friendly and intuitive interface for easy management of credit cards, rewards, and benefits.</li>
                  <li><span className="font-semibold">Educating users through stories and videos</span> — CRED offers educational content to help users understand credit cards and develop healthy credit habits.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">Customer Segmentation</h2>
                <ul className="list-disc pl-6 space-y-4 text-text-secondary text-m leading-relaxed">
                  <li><span className="font-semibold">Premium credit card customers with a credit score greater than 750</span> — Affluent users with responsible credit behavior.</li>
                  <li><span className="font-semibold">Lenders</span> — CRED members who lend money to other members through CRED Mint based on trust and reputation.</li>
                  <li><span className="font-semibold">Borrowers</span> — CRED members who borrow money from other members through CRED Mint based on trust and reputation.</li>
                  <li><span className="font-semibold">Credit companies</span> — Financial institutions that partner with CRED to offer exclusive deals and benefits to premium credit card customers.</li>
                  <li><span className="font-semibold">Premium brands</span> — High-end brands that partner with CRED to offer exclusive rewards and discounts to premium credit card customers.</li>
                  <li><span className="font-semibold">RentPayers</span> — CRED users who use CRED RentPay to pay their rent using a credit card, earning rewards and cashback on their payments, and managing their rent payments in one place.</li>
                  <li><span className="font-semibold">Insurance Holders</span> — CRED users who use CRED Protect to protect themselves against credit card fraud or theft, ensuring they are covered financially in case of a security breach.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">Possible Product Enhancements</h2>
                <p className="text-text-secondary text-m leading-relaxed mb-6">
                  CREDIT CARD HOLDERS IN INDIA are the top 5% affluent segment of the country with high spending habits. This user base opens up a goldmine of possible additional features that CRED can offer:
                </p>
                <ul className="list-disc pl-6 space-y-4 text-text-secondary text-m leading-relaxed">
                  <li><span className="font-semibold">Customer Data</span> — CRED has huge customer data of of the richest segment of the country. This data can be used to understand the spending patterns of people to build a recommendation engine with personalized suggestion and leverage it for brand collaboration, which can generate huge revenue and also provide personalized experience for its users.</li>
                  <li><span className="font-semibold">Financial Management</span> — CRED can offer personalized financial advice, investment suggestion and opportunities, wealth management and lastly income tax filing. Filing Income Tax is a huge pain with a lot of documentation and CRED can provide convenient solution for the same.</li>
                  <li><span className="font-semibold">CREDbank</span> — The two main aspects for a bank are- firstly, it need customers who can deposit money in bank for its lending operations and secondly, it need borrowers who can borrow money from banks. CRED due to its lucrative customer base exactly has these users making it a perfect fit to become an operational Electronic bank in future.</li>
                  <li><span className="font-semibold">Marketplace for Crypto and NFTs</span> — Since people only with high income participate in crypto exchange and buying NFTs, CRED with its already existing user base can build a marketplace offering crypto trading and NFT marketplace.</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">CRED Finance</h2>
                <p className="text-text-secondary text-m leading-relaxed mb-6">
                  CRED Finance is a new feature added to the CRED app that enables users to invest in stocks and create customized portfolios. The feature makes stock investment simple and trustworthy through:
                </p>
                <ul className="list-disc pl-6 space-y-4 text-text-secondary text-m leading-relaxed">
                  <li><span className="font-semibold">StockFolio Feature</span> — Allows users to create customized portfolios of stocks or invest in pre-made StockFolios curated by analysts and industry experts.</li>
                  <li><span className="font-semibold">Personalized Financial Consulting</span> — Provides expert advice and personalized recommendations to help users make informed investment decisions.</li>
                  <li><span className="font-semibold">Watchlist Functionality</span> — Enables users to track portfolio performance before investing and monitor their investments.</li>
                </ul>

                <p className="text-text-secondary text-m leading-relaxed mt-6 mb-6">
                  Phase 1 focuses on building the core StockFolio feature, with plans to expand to other investment options in future phases. This strategic approach allows CRED to:
                </p>

                <ul className="list-disc pl-6 space-y-4 text-text-secondary text-m leading-relaxed">
                  <li>Leverage its existing affluent user base who are likely to be interested in stock investments</li>
                  <li>Test the market and gather user feedback before expanding the feature set</li>
                  <li>Position itself as a comprehensive fintech platform by adding investment capabilities</li>
                  <li>Build trust through expert-curated portfolios and personalized consulting</li>
                </ul>

                <p className="text-text-secondary text-m leading-relaxed mt-6">
                  With the rising popularity of stock investments in India, CRED Finance is positioned to become a valuable tool for users looking to invest in stocks while maintaining the app&apos;s core principles of simplicity, convenience, and trustworthiness.
                </p>
              </section>

              {/* Content sections */}
              <section>
                <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">Product Requirements</h2>
                {/* Product requirements content */}
                <p className="text-text-secondary text-m leading-relaxed mb-6">
                  Below are the detailed product requirements for CRED Finance:
                </p>

                <div className="space-y-8">
                  {/* Vision */}
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4">Vision</h3>
                    <p className="text-text-secondary text-m leading-relaxed">
                      Our vision for CRED Finance is to become the go-to financial platform for our users, offering personalized and expert financial advice, easy-to-use investment tools, and a seamless user experience. We want to empower our users to take control of their finances and achieve their financial goals.
                    </p>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4">Description</h3>
                    <p className="text-text-secondary text-m leading-relaxed">
                      CRED Finance is a feature within the CRED app that provides users with a range of financial services, including personalized financial consulting, expert financial advice, mutual funds, SIP and retirement planning, and stock investments. For Phase 1, our focus is on building a feature called StockFolio, which allows users to create customized portfolios of stocks or invest in pre-made StockFolios created by industry experts and analysts.
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-4">Project Details</h3>
                      <ul className="space-y-4 text-text-secondary text-m">
                        <li><span className="font-semibold">Timing:</span> Launch within six months</li>
                        <li><span className="font-semibold">Status:</span> Not started</li>
                        <li><span className="font-semibold">Investment:</span> $500,000 for development and marketing</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary mb-4">Team</h3>
                      <ul className="list-disc pl-6 space-y-2 text-text-secondary text-m">
                        <li>Product Manager</li>
                        <li>UX/UI Designer</li>
                        <li>Front-end and Back-end Developers</li>
                        <li>Quality Assurance Engineer</li>
                        <li>Data Analyst</li>
                      </ul>
                    </div>
                  </div>

                  {/* Core Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4">Core Features</h3>
                    <ul className="list-disc pl-6 space-y-4 text-text-secondary text-m">
                      <li><span className="font-semibold">StockFolio:</span> Create customized stock portfolios or invest in premade ones</li>
                      <li><span className="font-semibold">Premade StockFolios:</span> Expert-curated portfolios for easy investing</li>
                      <li><span className="font-semibold">Watchlist:</span> Track stocks and portfolios of interest</li>
                      <li><span className="font-semibold">Market Analysis:</span> Real-time data and insights</li>
                      <li><span className="font-semibold">Portfolio Tracking:</span> Performance monitoring and notifications</li>
                      <li><span className="font-semibold">Secure Transactions:</span> Industry-standard security protocols</li>
                    </ul>
                  </div>

                  {/* Success Metrics */}
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4">Success Metrics</h3>
                    <ul className="list-disc pl-6 space-y-4 text-text-secondary text-m">
                      <li>User engagement with StockFolio feature</li>
                      <li>Number of customized portfolios created</li>
                      <li>Number of pre-made StockFolio investments</li>
                      <li>Revenue generated</li>
                      <li>User satisfaction ratings</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-primary mt-12 mb-6">EPICs</h2>
                {/* EPICs content */}
                <div className="space-y-12">
                  {/* EPIC 1 */}
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4">EPIC 1: StockFolio - Create Customized Portfolios</h3>
                    <p className="text-text-secondary text-m mb-4">As a CRED user, I want to create a customized portfolio of stocks to suit my investment strategy so that I can make informed investment decisions and track the performance of my portfolio.</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-text-primary mb-2">Tasks:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-text-secondary text-m">
                          <li>Design the StockFolio feature in the CRED app that allows users to create custom portfolios of stocks</li>
                          <li>Develop the functionality to select and add individual stocks to the portfolio</li>
                          <li>Allow users to adjust the weightage of each stock in the portfolio to create a balanced portfolio</li>
                          <li>Enable the ability to view the performance of the portfolio in real-time</li>
                          <li>Integrate the feature with the Watchlist feature to track the performance of the individual stocks in the portfolio</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-text-primary mb-2">Acceptance Criteria:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-text-secondary text-m">
                          <li>Users should be able to create a customized portfolio of stocks with a minimum of 10 stocks and a maximum of 30 stocks</li>
                          <li>Users should be able to adjust the weightage of each stock in the portfolio</li>
                          <li>The portfolio should be displayed with real-time performance metrics</li>
                          <li>The user should be able to track the performance of individual stocks in the portfolio using the Watchlist feature</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* EPIC 2 */}
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4">EPIC 2: StockFolio - Invest in Pre-made Portfolios</h3>
                    <p className="text-text-secondary text-m mb-4">As a CRED user, I want to invest in pre-made stock portfolios created by industry experts so that I can make informed investment decisions and benefit from the expertise of professionals.</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-text-primary mb-2">Tasks:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-text-secondary text-m">
                          <li>Design the StockFolio feature in the CRED app that allows users to invest in pre-made stock portfolios created by industry experts</li>
                          <li>Develop a rating system for the pre-made StockFolios</li>
                          <li>Integrate the feature with the Watchlist feature to track the performance of the pre-made StockFolios before investing</li>
                          <li>Enable the ability to invest in pre-made StockFolios with a single click</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-text-primary mb-2">Acceptance Criteria:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-text-secondary text-m">
                          <li>Users should be able to browse and select pre-made StockFolios based on their rating, performance, and investment strategy</li>
                          <li>Users should be able to track the performance of the pre-made StockFolios in real-time using the Watchlist feature</li>
                          <li>Users should be able to invest in pre-made StockFolios with a single click</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* EPIC 3 */}
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4">EPIC 3: Personalized Financial Consulting</h3>
                    <p className="text-text-secondary text-m mb-4">As a CRED user, I want to receive personalized financial consulting for stock investments from experts so that I can make informed investment decisions and benefit from professional guidance.</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-text-primary mb-2">Tasks:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-text-secondary text-m">
                          <li>Design the Personalized Financial Consulting feature</li>
                          <li>Develop a system for users to request consultations with financial experts</li>
                          <li>Integrate the feature with the user&apos;s portfolio and Watchlist</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-text-primary mb-2">Acceptance Criteria:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-text-secondary text-m">
                          <li>Users should be able to request a consultation with a financial expert through the CRED app</li>
                          <li>The consultation should be tailored to the user&apos;s investment strategy and portfolio</li>
                          <li>The user should receive actionable advice on how to improve their portfolio&apos;s performance</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* EPICs 4-6 would follow the same structure */}
                

                  {/* EPIC 4 */}
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4">EPIC 4: Expert Financial Advice</h3>
                    <p className="text-text-secondary text-m mb-4">CRED Finance offers users access to expert financial advice to help them make informed investment decisions. Users can schedule one-on-one consultations with certified financial advisors who can provide personalized investment advice based on their financial goals and risk tolerance.</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-text-primary mb-2">Tasks:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-text-secondary text-m">
                          <li>Research and identify certified financial advisors to join the CRED Finance platform</li>
                          <li>Develop a system for users to schedule consultations with advisors</li>
                          <li>Implement a user-friendly interface for consultations</li>
                          <li>Provide ongoing training and support to advisors</li>
                          <li>Develop a system for tracking the success of consultations</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-text-primary mb-2">Acceptance Criteria:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-text-secondary text-m">
                          <li>Users can easily schedule consultations with certified financial advisors through the CRED Finance platform</li>
                          <li>Advisors are knowledgeable and provide useful investment advice</li>
                          <li>Users report high levels of satisfaction with the advice they receive</li>
                          <li>Advisors receive positive feedback from users</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* EPIC 5 */}
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4">EPIC 5: Mutual Funds</h3>
                    <p className="text-text-secondary text-m mb-4">CRED Finance offers users access to a range of mutual funds from top asset management companies. Users can invest in pre-made mutual fund portfolios or create their own portfolios based on their investment goals and risk tolerance.</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-text-primary mb-2">Tasks:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-text-secondary text-m">
                          <li>Research and identify top asset management companies to partner with</li>
                          <li>Develop a system for users to invest in pre-made mutual fund portfolios or create their own portfolios</li>
                          <li>Implement a user-friendly interface for investing in mutual funds</li>
                          <li>Develop a system for tracking the performance of mutual fund portfolios</li>
                          <li>Provide ongoing support and training to users</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-text-primary mb-2">Acceptance Criteria:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-text-secondary text-m">
                          <li>Users can easily invest in pre-made mutual fund portfolios or create their own portfolios through the CRED Finance platform</li>
                          <li>Users report high levels of satisfaction with the mutual fund investment options</li>
                          <li>Users achieve positive returns on their investments</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* EPIC 6 */}
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-4">EPIC 6: SIP and Retirement Planning</h3>
                    <p className="text-text-secondary text-m mb-4">CRED Finance offers users access to Systematic Investment Plans (SIPs) and retirement planning tools to help them achieve their long-term financial goals. Users can set up automated investments and track their progress towards their retirement goals.</p>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-semibold text-text-primary mb-2">Tasks:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-text-secondary text-m">
                          <li>Research and identify top SIP providers and retirement planning tools to partner with</li>
                          <li>Develop a system for users to set up automated investments and track their progress towards their retirement goals</li>
                          <li>Implement a user-friendly interface for managing SIPs and retirement planning</li>
                          <li>Develop a system for tracking the performance of SIPs and retirement plans</li>
                          <li>Provide ongoing support and training to users</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold text-text-primary mb-2">Acceptance Criteria:</h4>
                        <ul className="list-disc pl-6 space-y-2 text-text-secondary text-m">
                          <li>Users can easily set up automated investments and track their progress towards their retirement goals through the CRED Finance platform</li>
                          <li>Users report high levels of satisfaction with the SIP and retirement planning options</li>
                          <li>Users achieve positive returns on their investments and reach their retirement goals on time</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            
              {/* Figma Link */}
              <section className="mt-12">
                <a 
                  href="https://www.figma.com/design/fzlGO5v2hBXoR3dueDfsDi/CRED-Finance-Prototype?node-id=0-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Figma Prototype →
                </a>
              </section>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  );
} 