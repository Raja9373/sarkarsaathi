import { DownloadItem } from '../types';

export const DOWNLOADS_LIST: DownloadItem[] = [
  {
    id: 'income-affidavit-format',
    title: 'Income Certificate Self Declaration Affidavit (₹10 Stamp Paper)',
    hindiTitle: 'आय प्रमाण पत्र स्व-घोषणा हलफनामा प्रारूप',
    category: 'Affidavits',
    department: 'Revenue Department Delhi (e-District)',
    description: 'Mandatory self-declaration affidavit format required for applying Income Certificate on e-District Delhi portal.',
    formatText: `BEFORE THE NOTARY PUBLIC / EXECUTIVE MAGISTRATE, DELHI

AFFIDAVIT FOR ISSUANCE OF INCOME CERTIFICATE

I, [YOUR FULL NAME], S/o, D/o, W/o Shri [FATHER / SPOUSE NAME], Aged about [AGE] Years, Resident of [FULL RESIDENTIAL ADDRESS, DELHI], do hereby solemnly affirm and declare as under:

1. That I am a permanent resident of NCT of Delhi at the above mentioned address.
2. That I am working as [OCCUPATION / PROFESSION / UNEMPLOYED] and my total gross annual income from all sources (including salary, business, agriculture, property, and house rent) is Rs. [ANNUAL INCOME IN FIGURES]/- (Rupees [ANNUAL INCOME IN WORDS] Only).
3. That my family member details and their respective incomes are as follows:
   - Self: Rs. [AMOUNT]
   - Spouse: Rs. [AMOUNT]
   - Total Family Annual Income: Rs. [TOTAL AMOUNT]
4. That no other family member has applied for or possesses an Income Certificate for the current financial year.
5. That the statements made above are true and correct to the best of my knowledge and belief. Nothing material has been concealed therefrom.

DEPONENT

VERIFICATION:
Verified at Delhi on this [DATE] day of [MONTH], [YEAR] that the contents of this affidavit are true to my knowledge and nothing is false.

DEPONENT`,
    officialPdfUrl: 'https://edistrict.delhigovt.nic.in/',
    isCustomFormatAvailable: true
  },
  {
    id: 'name-change-affidavit',
    title: 'General Name Change Affidavit (Notary Format)',
    hindiTitle: 'नाम परिवर्तन हलफनामा (प्रारूप)',
    category: 'Affidavits',
    department: 'Central Gazette / Revenue Dept',
    description: 'Standard legal affidavit format for changing name or correcting spelling in official records.',
    formatText: `BEFORE THE NOTARY PUBLIC, NEW DELHI

AFFIDAVIT FOR CHANGE OF NAME

I, [OLD NAME], S/o, D/o, W/o [FATHER / SPOUSE NAME], Aged about [AGE] Years, Residing at [FULL DELHI ADDRESS], do hereby solemnly affirm and state as follows:

1. That my name as per my existing records (Aadhaar / PAN / Passport) is [OLD NAME].
2. That I have changed my name and henceforth I shall be known as [NEW NAME] for all future official, legal, and personal purposes.
3. That my new name shall be [NEW NAME] and all documents issued in future should bear my new name [NEW NAME].
4. That I declare that [OLD NAME] and [NEW NAME] are one and the same person.

DEPONENT

VERIFICATION:
Verified at Delhi on this [DATE] day of [MONTH], 2026 that the contents of the above affidavit are true and correct.

DEPONENT`,
    officialPdfUrl: 'https://egazette.gov.in/',
    isCustomFormatAvailable: true
  },
  {
    id: 'tenant-verification-form',
    title: 'Delhi Police Tenant Verification Form',
    hindiTitle: 'दिल्ली पुलिस किराएदार सत्यापन फॉर्म',
    category: 'Govt Forms',
    department: 'Delhi Police',
    description: 'Official Delhi Police tenant verification application format for property landlords.',
    formatText: `DELHI POLICE TENANT VERIFICATION FORM

I. PARTICULARS OF LANDLORD:
1. Name of Landlord: _______________________________
2. Address of Rented Premises: _____________________
3. Mobile Number: __________________________________

II. PARTICULARS OF TENANT:
1. Name of Tenant: _________________________________
2. Father Name: ____________________________________
3. Permanent Address: ______________________________
4. Occupation & Workplace Address: _________________
5. Aadhaar / Voter ID No: __________________________
6. Contact Mobile No: ______________________________

Signature of Landlord                            Signature of Tenant`,
    officialPdfUrl: 'https://delhipolice.gov.in/',
    isCustomFormatAvailable: true
  },
  {
    id: 'address-proof-declaration',
    title: 'Self Declaration Form for Aadhaar Address Update (HOF)',
    hindiTitle: 'आधार पता सुधार स्व-घोषणा पत्र (Head of Family)',
    category: 'Self Declaration',
    department: 'UIDAI myAadhaar',
    description: 'Head of Family (HOF) self declaration format for updating Aadhaar address without separate address proof.',
    formatText: `SELF-DECLARATION BY HEAD OF FAMILY (HOF) FOR AADHAAR ADDRESS UPDATE

I, [HOF NAME], holding Aadhaar Number [HOF AADHAAR NUMBER], Resident of [HOF ADDRESS], do hereby declare that:

1. Mr./Ms. [APPLICANT NAME], holding Aadhaar Number [APPLICANT AADHAAR NUMBER], is my [RELATION: Son/Daughter/Spouse/Parent].
2. The applicant resides with me at the above mentioned address.
3. I hereby give my consent to update the address in the Aadhaar of Mr./Ms. [APPLICANT NAME] as per my Aadhaar address.
4. I understand that if any information is found false, UIDAI may take legal action.

Name of HOF: _______________________
Signature of HOF: ___________________
Date: ______________`,
    officialPdfUrl: 'https://myaadhaar.uidai.gov.in/',
    isCustomFormatAvailable: true
  },
  {
    id: 'noc-property-owner',
    title: 'No Objection Certificate (NOC) for Business / Electricity Connection',
    hindiTitle: 'मकान मालिक एनओसी (बिजनेस पता / मीटर)',
    category: 'NOC Formats',
    department: 'GST / MCD / Discom',
    description: 'NOC from property owner for using address for GST registration, company incorporation, or new electricity connection.',
    formatText: `NO OBJECTION CERTIFICATE (NOC) FROM PROPERTY OWNER

TO WHOMSOEVER IT MAY CONCERN

I, [PROPERTY OWNER NAME], S/o [FATHER NAME], Resident of [OWNER ADDRESS], am the absolute legal owner of the property situated at:
[FULL PROPERTY ADDRESS, DELHI].

I do hereby state and declare that I have NO OBJECTION if Mr./Ms./M/s [TENANT / BUSINESS NAME] uses the aforementioned premises for:
[ ] Commercial / Business Registration (GST / MSME / Company)
[ ] Installation of New Electricity Meter / Water Meter

I have permitted them to use the space for business activities as per agreed terms.

Owner Name: _______________________
Owner Signature: __________________
Property Tax / Electricity Bill Ref: ______________
Date: ______________`,
    officialPdfUrl: 'https://www.gst.gov.in/',
    isCustomFormatAvailable: true
  },
  {
    id: 'domicile-affidavit-format',
    title: 'Domicile / Residence Certificate Self Declaration Affidavit',
    hindiTitle: 'मूल निवास प्रमाण पत्र स्व-घोषणा पत्र',
    category: 'Affidavits',
    department: 'Revenue Department Delhi',
    description: 'Self-declaration format to prove continuous 3+ years residence in Delhi for Domicile Certificate.',
    formatText: `BEFORE THE NOTARY PUBLIC, DELHI

AFFIDAVIT FOR DOMICILE / RESIDENCE CERTIFICATE

I, [APPLICANT NAME], S/o, D/o [FATHER NAME], Resident of [DELHI ADDRESS], do hereby solemnly affirm and declare:

1. That I am residing continuously in Delhi for the last [NUMBER OF YEARS e.g. 10] years.
2. That I hold Aadhaar Card / Voter ID / Ration Card registered at the above Delhi address.
3. That I have completed my education / employment in Delhi.
4. That I am applying for Domicile Certificate for educational / official recruitment purposes in Delhi.

DEPONENT

VERIFICATION:
Verified at Delhi on this [DATE] that the facts mentioned above are true to my knowledge.

DEPONENT`,
    officialPdfUrl: 'https://edistrict.delhigovt.nic.in/',
    isCustomFormatAvailable: true
  },
  {
    id: 'ews-self-declaration',
    title: 'EWS Category Income & Asset Self Declaration Format',
    hindiTitle: 'ईडब्ल्यूएस श्रेणी आय एवं संपत्ति स्व-घोषणा पत्र',
    category: 'Self Declaration',
    department: 'Revenue Department Delhi',
    description: 'Format for declaration of family annual income under ₹8 Lakhs for Economically Weaker Section (EWS) quota.',
    formatText: `INCOME & ASSET CERTIFICATE SELF-DECLARATION FOR EWS CATEGORY

I, [NAME], Resident of [ADDRESS], candidate for EWS quota, declare that:

1. My family total annual income from all sources is below Rs 8,00,000/- (Eight Lakh Rupees).
2. My family does not own or possess any of the following assets:
   i. 5 acres of agricultural land and above.
  ii. Residential flat of 1000 sq ft and above.
 iii. Residential plot of 100 sq yards and above in notified municipalities.

Sign of Applicant: _____________________
Date: ______________`,
    officialPdfUrl: 'https://edistrict.delhigovt.nic.in/',
    isCustomFormatAvailable: true
  }
];

