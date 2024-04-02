import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Example() {
  // State variables to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });

  // Function to update form data on input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Me</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Let me know what is on your mind.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="firstName"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="lastName"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
            Phone number
          </label>
          <div className="relative mt-2.5">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <select
                id="country"
                name="country"
                className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option value="AF">Afghanistan (+93)</option>
              <option value="AL">Albania (+355)</option>
              <option value="DZ">Algeria (+213)</option>
              <option value="AS">American Samoa (+1-684)</option>
              <option value="AD">Andorra (+376)</option>
              <option value="AO">Angola (+244)</option>
              <option value="AI">Anguilla (+1-264)</option>
              <option value="AQ">Antarctica (+672)</option>
              <option value="AG">Antigua and Barbuda (+1-268)</option>
              <option value="AR">Argentina (+54)</option>
              <option value="AM">Armenia (+374)</option>
              <option value="AW">Aruba (+297)</option>
              <option value="AU">Australia (+61)</option>
              <option value="AT">Austria (+43)</option>
              <option value="AZ">Azerbaijan (+994)</option>
              <option value="BS">Bahamas (+1-242)</option>
              <option value="BH">Bahrain (+973)</option>
              <option value="BD">Bangladesh (+880)</option>
              <option value="BB">Barbados (+1-246)</option>
              <option value="BY">Belarus (+375)</option>
              <option value="BE">Belgium (+32)</option>
              <option value="BZ">Belize (+501)</option>
              <option value="BJ">Benin (+229)</option>
              <option value="BM">Bermuda (+1-441)</option>
              <option value="BT">Bhutan (+975)</option>
              <option value="BO">Bolivia (+591)</option>
              <option value="BA">Bosnia and Herzegovina (+387)</option>
              <option value="BW">Botswana (+267)</option>
              <option value="BR">Brazil (+55)</option>
              <option value="IO">British Indian Ocean Territory (+246)</option>
              <option value="VG">British Virgin Islands (+1-284)</option>
              <option value="BN">Brunei (+673)</option>
              <option value="BG">Bulgaria (+359)</option>
              <option value="BF">Burkina Faso (+226)</option>
              <option value="BI">Burundi (+257)</option>
              <option value="KH">Cambodia (+855)</option>
              <option value="CM">Cameroon (+237)</option>
              <option value="CA">Canada (+1)</option>
              <option value="CV">Cape Verde (+238)</option>
              <option value="KY">Cayman Islands (+1-345)</option>
              <option value="CF">Central African Republic (+236)</option>
              <option value="TD">Chad (+235)</option>
              <option value="CL">Chile (+56)</option>
              <option value="CN">China (+86)</option>
              <option value="CX">Christmas Island (+61)</option>
              <option value="CC">Cocos Islands (+61)</option>
              <option value="CO">Colombia (+57)</option>
              <option value="KM">Comoros (+269)</option>
              <option value="CK">Cook Islands (+682)</option>
              <option value="CR">Costa Rica (+506)</option>
              <option value="HR">Croatia (+385)</option>
              <option value="CU">Cuba (+53)</option>
              <option value="CW">Curacao (+599)</option>
              <option value="CY">Cyprus (+357)</option>
              <option value="CZ">Czech Republic (+420)</option>
              <option value="CD">Democratic Republic of the Congo (+243)</option>
              <option value="DK">Denmark (+45)</option>
              <option value="DJ">Djibouti (+253)</option>
              <option value="DM">Dominica (+1-767)</option>
              <option value="DO">Dominican Republic (+1-809, +1-829, +1-849)</option>
              <option value="TL">East Timor (+670)</option>
              <option value="EC">Ecuador (+593)</option>
              <option value="EG">Egypt (+20)</option>
              <option value="SV">El Salvador (+503)</option>
              <option value="GQ">Equatorial Guinea (+240)</option>
              <option value="ER">Eritrea (+291)</option>
              <option value="EE">Estonia (+372)</option>
              <option value="ET">Ethiopia (+251)</option>
              <option value="FK">Falkland Islands (+500)</option>
              <option value="FO">Faroe Islands (+298)</option>
              <option value="FJ">Fiji (+679)</option>
              <option value="FI">Finland (+358)</option>
              <option value="FR">France (+33)</option>
              <option value="PF">French Polynesia (+689)</option>
              <option value="GA">Gabon (+241)</option>
              <option value="GM">Gambia (+220)</option>
              <option value="GE">Georgia (+995)</option>
              <option value="DE">Germany (+49)</option>
              <option value="GH">Ghana (+233)</option>
              <option value="GI">Gibraltar (+350)</option>
              <option value="GR">Greece (+30)</option>
              <option value="GL">Greenland (+299)</option>
              <option value="GD">Grenada (+1-473)</option>
              <option value="GU">Guam (+1-671)</option>
              <option value="GT">Guatemala (+502)</option>
              <option value="GG">Guernsey (+44-1481)</option>
              <option value="GN">Guinea (+224)</option>
              <option value="GW">Guinea-Bissau (+245)</option>
              <option value="GY">Guyana (+592)</option>
              <option value="HT">Haiti (+509)</option>
              <option value="HN">Honduras (+504)</option>
              <option value="HK">Hong Kong (+852)</option>
              <option value="HU">Hungary (+36)</option>
              <option value="IS">Iceland (+354)</option>
              <option value="IN">India (+91)</option>
              <option value="ID">Indonesia (+62)</option>
              <option value="IR">Iran (+98)</option>
              <option value="IQ">Iraq (+964)</option>
              <option value="IE">Ireland (+353)</option>
              <option value="IM">Isle of Man (+44-1624)</option>
              <option value="IL">Israel (+972)</option>
              <option value="IT">Italy (+39)</option>
              <option value="CI">Ivory Coast (+225)</option>
              <option value="JM">Jamaica (+1-876)</option>
              <option value="JP">Japan (+81)</option>
              <option value="JE">Jersey (+44-1534)</option>
              <option value="JO">Jordan (+962)</option>
              <option value="KZ">Kazakhstan (+7)</option>
              <option value="KE">Kenya (+254)</option>
              <option value="KI">Kiribati (+686)</option>
              <option value="XK">Kosovo (+383)</option>
              <option value="KW">Kuwait (+965)</option>
              <option value="KG">Kyrgyzstan (+996)</option>
              <option value="LA">Laos (+856)</option>
              <option value="LV">Latvia (+371)</option>
              <option value="LB">Lebanon (+961)</option>
              <option value="LS">Lesotho (+266)</option>
              <option value="LR">Liberia (+231)</option>
              <option value="LY">Libya (+218)</option>
              <option value="LI">Liechtenstein (+423)</option>
              <option value="LT">Lithuania (+370)</option>
              <option value="LU">Luxembourg (+352)</option>
              <option value="MO">Macao (+853)</option>
              <option value="MK">Macedonia (+389)</option>
              <option value="MG">Madagascar (+261)</option>
              <option value="MW">Malawi (+265)</option>
              <option value="MY">Malaysia (+60)</option>
              <option value="MV">Maldives (+960)</option>
              <option value="ML">Mali (+223)</option>
              <option value="MT">Malta (+356)</option>
              <option value="MH">Marshall Islands (+692)</option>
              <option value="MR">Mauritania (+222)</option>
              <option value="MU">Mauritius (+230)</option>
              <option value="YT">Mayotte (+262)</option>
              <option value="MX">Mexico (+52)</option>
              <option value="FM">Micronesia (+691)</option>
              <option value="MD">Moldova (+373)</option>
              <option value="MC">Monaco (+377)</option>
              <option value="MN">Mongolia (+976)</option>
              <option value="ME">Montenegro (+382)</option>
              <option value="MS">Montserrat (+1-664)</option>
              <option value="MA">Morocco (+212)</option>
              <option value="MZ">Mozambique (+258)</option>
              <option value="MM">Myanmar (+95)</option>
              <option value="NA">Namibia (+264)</option>
              <option value="NR">Nauru (+674)</option>
              <option value="NP">Nepal (+977)</option>
              <option value="NL">Netherlands (+31)</option>
              <option value="AN">Netherlands Antilles (+599)</option>
              <option value="NC">New Caledonia (+687)</option>
              <option value="NZ">New Zealand (+64)</option>
              <option value="NI">Nicaragua (+505)</option>
              <option value="NE">Niger (+227)</option>
              <option value="NG">Nigeria (+234)</option>
              <option value="NU">Niue (+683)</option>
              <option value="KP">North Korea (+850)</option>
              <option value="MP">Northern Mariana Islands (+1-670)</option>
              <option value="NO">Norway (+47)</option>
              <option value="OM">Oman (+968)</option>
              <option value="PK">Pakistan (+92)</option>
              <option value="PW">Palau (+680)</option>
              <option value="PS">Palestine (+970)</option>
              <option value="PA">Panama (+507)</option>
              <option value="PG">Papua New Guinea (+675)</option>
              <option value="PY">Paraguay (+595)</option>
              <option value="PE">Peru (+51)</option>
              <option value="PH">Philippines (+63)</option>
              <option value="PN">Pitcairn (+64)</option>
              <option value="PL">Poland (+48)</option>
              <option value="PT">Portugal (+351)</option>
              <option value="PR">Puerto Rico (+1-787, +1-939)</option>
              <option value="QA">Qatar (+974)</option>
              <option value="CG">Republic of the Congo (+242)</option>
              <option value="RE">Reunion (+262)</option>
              <option value="RO">Romania (+40)</option>
              <option value="RU">Russia (+7)</option>
              <option value="RW">Rwanda (+250)</option>
              <option value="BL">Saint Barthelemy (+590)</option>
              <option value="SH">Saint Helena (+290)</option>
              <option value="KN">Saint Kitts and Nevis (+1-869)</option>
              <option value="LC">Saint Lucia (+1-758)</option>
              <option value="MF">Saint Martin (+590)</option>
              <option value="PM">Saint Pierre and Miquelon (+508)</option>
              <option value="VC">Saint Vincent and the Grenadines (+1-784)</option>
              <option value="WS">Samoa (+685)</option>
              <option value="SM">San Marino (+378)</option>
              <option value="ST">Sao Tome and Principe (+239)</option>
              <option value="SA">Saudi Arabia (+966)</option>
              <option value="SN">Senegal (+221)</option>
              <option value="RS">Serbia (+381)</option>
              <option value="SC">Seychelles (+248)</option>
              <option value="SL">Sierra Leone (+232)</option>
              <option value="SG">Singapore (+65)</option>
              <option value="SX">Sint Maarten (+1-721)</option>
              <option value="SK">Slovakia (+421)</option>
              <option value="SI">Slovenia (+386)</option>
              <option value="SB">Solomon Islands (+677)</option>
              <option value="SO">Somalia (+252)</option>
              <option value="ZA">South Africa (+27)</option>
              <option value="KR">South Korea (+82)</option>
              <option value="SS">South Sudan (+211)</option>
              <option value="ES">Spain (+34)</option>
              <option value="LK">Sri Lanka (+94)</option>
              <option value="SD">Sudan (+249)</option>
              <option value="SR">Suriname (+597)</option>
              <option value="SJ">Svalbard and Jan Mayen (+47)</option>
              <option value="SZ">Swaziland (+268)</option>
              <option value="SE">Sweden (+46)</option>
              <option value="CH">Switzerland (+41)</option>
              <option value="SY">Syria (+963)</option>
              <option value="TW">Taiwan (+886)</option>
              <option value="TJ">Tajikistan (+992)</option>
              <option value="TZ">Tanzania (+255)</option>
              <option value="TH">Thailand (+66)</option>
              <option value="TG">Togo (+228)</option>
              <option value="TK">Tokelau (+690)</option>
              <option value="TO">Tonga (+676)</option>
              <option value="TT">Trinidad and Tobago (+1-868)</option>
              <option value="TN">Tunisia (+216)</option>
              <option value="TR">Turkey (+90)</option>
              <option value="TM">Turkmenistan (+993)</option>
              <option value="TC">Turks and Caicos Islands (+1-649)</option>
              <option value="TV">Tuvalu (+688)</option>
              <option value="VI">U.S. Virgin Islands (+1-340)</option>
              <option value="UG">Uganda (+256)</option>
              <option value="UA">Ukraine (+380)</option>
              <option value="AE">United Arab Emirates (+971)</option>
              <option value="GB">United Kingdom (+44)</option>
              <option value="US">United States (+1)</option>
              <option value="UY">Uruguay (+598)</option>
              <option value="UZ">Uzbekistan (+998)</option>
              <option value="VU">Vanuatu (+678)</option>
              <option value="VA">Vatican (+379)</option>
              <option value="VE">Venezuela (+58)</option>
              <option value="VN">Vietnam (+84)</option>
              <option value="WF">Wallis and Futuna (+681)</option>
              <option value="EH">Western Sahara (+212)</option>
              <option value="YE">Yemen (+967)</option>
              <option value="ZM">Zambia (+260)</option>
              <option value="ZW">Zimbabwe (+263)</option>

              </select>
              <ChevronDownIcon
                className="pointer-events-none absolute right-1 top-0 h-full w-5 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              autoComplete="tel"
              className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
            Subject
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              name="subject"
              id="subject"
              autoComplete="organization"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              name="message"
              id="message"
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={''}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Let's talk
        </button>
      </div>
    </form>
  </div>
  )
}


