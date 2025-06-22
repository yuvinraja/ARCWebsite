import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Voltaero Technologies',
  description: 'Privacy Policy for Voltaero Technologies. Learn about how we collect, use and protect your personal data when you use our services.',
  keywords: 'privacy policy, data protection, personal information, Voltaero Technologies',
  robots: 'index, follow',
  openGraph: {
    title: 'Privacy Policy | Voltaero Technologies',
    description: 'Privacy Policy for Voltaero Technologies. Learn about how we collect, use and protect your personal data.',
    type: 'website',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-gray max-w-none">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: June 22, 2025</p>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the{' '}
                <a href="https://www.freeprivacypolicy.com/free-privacy-policy-generator/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                  Free Privacy Policy Generator
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Interpretation and Definitions</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Interpretation</h3>
                <p className="text-gray-700 leading-relaxed">
                  The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Definitions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">For the purposes of this Privacy Policy:</p>
                
                <div className="space-y-4">
                  <div>
                    <span className="font-semibold text-gray-900">Account</span>
                    <span className="text-gray-700"> means a unique account created for You to access our Service or parts of our Service.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Affiliate</span>
                    <span className="text-gray-700"> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Company</span>
                    <span className="text-gray-700"> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to VOLTAERO TECHNOLOGIES PRIVATE LIMITED, 2-678; Rice Mill Compound KR P Chittoor; Chittoor; Chittoor; Andhra Pradesh; 517001; India.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Cookies</span>
                    <span className="text-gray-700"> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Country</span>
                    <span className="text-gray-700"> refers to: Andhra Pradesh, India</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Device</span>
                    <span className="text-gray-700"> means any device that can access the Service such as a computer, a cellphone or a digital tablet.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Personal Data</span>
                    <span className="text-gray-700"> is any information that relates to an identified or identifiable individual.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Service</span>
                    <span className="text-gray-700"> refers to the Website.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Service Provider</span>
                    <span className="text-gray-700"> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Usage Data</span>
                    <span className="text-gray-700"> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Website</span>
                    <span className="text-gray-700"> refers to Voltaero Technologies, accessible from{' '}
                      <a href="https://voltaero.vercel.app/" rel="external nofollow noopener" target="_blank" className="text-blue-600 hover:text-blue-800 underline">
                        https://voltaero.vercel.app/
                      </a>
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">You</span>
                    <span className="text-gray-700"> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Collecting and Using Your Personal Data</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Types of Data Collected</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Personal Data</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                  </p>
                  <div className="space-y-2 ml-4">
                    <div className="text-gray-700">• Email address</div>
                    <div className="text-gray-700">• First name and last name</div>
                    <div className="text-gray-700">• Usage Data</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Usage Data</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">Usage Data is collected automatically when using the Service.</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Tracking Technologies and Cookies</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="font-semibold text-gray-900">Cookies or Browser Cookies.</span>
                      <span className="text-gray-700"> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Web Beacons.</span>
                      <span className="text-gray-700"> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).</span>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-4">
                    Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies on the{' '}
                    <a href="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/#Use_Of_Cookies_And_Tracking" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                      Free Privacy Policy website
                    </a>{' '}
                    article.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-4">We use both Session and Persistent Cookies for the purposes set out below:</p>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="font-semibold text-gray-900 mb-2">Necessary / Essential Cookies</div>
                      <div className="text-gray-700 ml-4 space-y-1">
                        <div>Type: Session Cookies</div>
                        <div>Administered by: Us</div>
                        <div>Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-2">Cookies Policy / Notice Acceptance Cookies</div>
                      <div className="text-gray-700 ml-4 space-y-1">
                        <div>Type: Persistent Cookies</div>
                        <div>Administered by: Us</div>
                        <div>Purpose: These Cookies identify if users have accepted the use of cookies on the Website.</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-2">Functionality Cookies</div>
                      <div className="text-gray-700 ml-4 space-y-1">
                        <div>Type: Persistent Cookies</div>
                        <div>Administered by: Us</div>
                        <div>Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mt-4">
                    For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Use of Your Personal Data</h3>
                <p className="text-gray-700 leading-relaxed mb-4">The Company may use Personal Data for the following purposes:</p>
                
                <div className="space-y-3">
                  <div><span className="font-semibold text-gray-900">To provide and maintain our Service</span><span className="text-gray-700">, including to monitor the usage of our Service.</span></div>
                  <div><span className="font-semibold text-gray-900">To manage Your Account:</span><span className="text-gray-700"> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</span></div>
                  <div><span className="font-semibold text-gray-900">For the performance of a contract:</span><span className="text-gray-700"> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</span></div>
                  <div><span className="font-semibold text-gray-900">To contact You:</span><span className="text-gray-700"> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</span></div>
                  <div><span className="font-semibold text-gray-900">To provide You</span><span className="text-gray-700"> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</span></div>
                  <div><span className="font-semibold text-gray-900">To manage Your requests:</span><span className="text-gray-700"> To attend and manage Your requests to Us.</span></div>
                  <div><span className="font-semibold text-gray-900">For business transfers:</span><span className="text-gray-700"> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</span></div>
                  <div><span className="font-semibold text-gray-900">For other purposes</span><span className="text-gray-700">: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</span></div>
                </div>

                <p className="text-gray-700 leading-relaxed mt-6 mb-4">We may share Your personal information in the following situations:</p>
                
                <div className="space-y-3">
                  <div><span className="font-semibold text-gray-900">With Service Providers:</span><span className="text-gray-700"> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</span></div>
                  <div><span className="font-semibold text-gray-900">For business transfers:</span><span className="text-gray-700"> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</span></div>
                  <div><span className="font-semibold text-gray-900">With Affiliates:</span><span className="text-gray-700"> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</span></div>
                  <div><span className="font-semibold text-gray-900">With business partners:</span><span className="text-gray-700"> We may share Your information with Our business partners to offer You certain products, services or promotions.</span></div>
                  <div><span className="font-semibold text-gray-900">With other users:</span><span className="text-gray-700"> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</span></div>
                  <div><span className="font-semibold text-gray-900">With Your consent</span><span className="text-gray-700">: We may disclose Your personal information for any other purpose with Your consent.</span></div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Retention of Your Personal Data</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Transfer of Your Personal Data</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Delete Your Personal Data</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our Service may give You the ability to delete certain information about You from within the Service.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">Disclosure of Your Personal Data</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Business Transactions</h4>
                  <p className="text-gray-700 leading-relaxed">
                    If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Law enforcement</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">Other legal requirements</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
                  <div className="space-y-2 ml-4">
                    <div className="text-gray-700">• Comply with a legal obligation</div>
                    <div className="text-gray-700">• Protect and defend the rights or property of the Company</div>
                    <div className="text-gray-700">• Prevent or investigate possible wrongdoing in connection with the Service</div>
                    <div className="text-gray-700">• Protect the personal safety of Users of the Service or the public</div>
                    <div className="text-gray-700">• Protect against legal liability</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Security of Your Personal Data</h3>
              <p className="text-gray-700 leading-relaxed">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Links to Other Websites</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to this Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}