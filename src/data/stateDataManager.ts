import { HospitalItem } from './hospitalData';
import { PoliceStationItem } from './policeStationData';
import { RtoOfficeItem } from './rtoData';
import { getStateInfo } from './statesData';
import indiaDataJson from './india.json';

export interface PincodeItem {
  pin: string;
  area: string;
  district: string;
  postOffice: string;
  stdCode: string;
  state?: string;
}

export interface StateGovtOfficeItem {
  id: string;
  name: string;
  hindiName: string;
  category: string;
  district: string;
  state: string;
  address: string;
  pincode: string;
  helpline: string;
  email: string;
  website: string;
  publicHours: string;
  services: string[];
}

export interface StateIfscItem {
  ifsc: string;
  bank: string;
  branch: string;
  district: string;
  city: string;
  state: string;
  address: string;
  contact: string;
  micr: string;
  upi: boolean;
  rtgs: boolean;
  neft: boolean;
  imps: boolean;
}

export interface StateDataSet {
  pincodes: PincodeItem[];
  hospitals: HospitalItem[];
  police: PoliceStationItem[];
  rto: RtoOfficeItem[];
  ifsc: StateIfscItem[];
  offices: StateGovtOfficeItem[];
}

export const indiaData: Record<string, StateDataSet> = indiaDataJson as unknown as Record<string, StateDataSet>;

// Aliases mapping to ensure both slugs and abbreviations resolve accurately
const STATE_ALIAS_MAP: Record<string, string> = {
  'delhi': 'delhi',
  'dl': 'delhi',
  'nct-of-delhi': 'delhi',
  'punjab': 'punjab',
  'pb': 'punjab',
  'haryana': 'haryana',
  'hr': 'haryana',
  'uttar-pradesh': 'up',
  'up': 'up',
  'maharashtra': 'maharashtra',
  'mh': 'maharashtra',
  'rajasthan': 'rajasthan',
  'rj': 'rajasthan',
  'bihar': 'bihar',
  'br': 'bihar',
  'gujarat': 'gujarat',
  'gj': 'gujarat',
  'karnataka': 'karnataka',
  'ka': 'karnataka',
  'west-bengal': 'west-bengal',
  'wb': 'west-bengal',
  'tamil-nadu': 'tamil-nadu',
  'tn': 'tamil-nadu',
};

/**
 * Returns true if the state has custom localized dataset in india.json
 */
export function isStateDataReady(stateId: string): boolean {
  const norm = stateId?.toLowerCase().trim() || 'delhi';
  const resolvedKey = STATE_ALIAS_MAP[norm] || norm;
  return Boolean(indiaData[resolvedKey] && (
    (indiaData[resolvedKey].pincodes?.length || 0) > 0 ||
    (indiaData[resolvedKey].hospitals?.length || 0) > 0
  ));
}

/**
 * Get state dataset by stateId from india.json.
 * If the state is not ready, returns an informative state-specific placeholder (NEVER returns wrong Delhi data).
 */
export function getStateDataSet(stateId: string): StateDataSet & { isDefaultSample?: boolean; stateName: string } {
  const stateInfo = getStateInfo(stateId);
  const norm = stateId?.toLowerCase().trim() || 'delhi';
  const resolvedKey = STATE_ALIAS_MAP[norm] || norm;
  
  if (indiaData[resolvedKey]) {
    const rawSet = indiaData[resolvedKey];
    return {
      pincodes: rawSet.pincodes || [],
      hospitals: (rawSet.hospitals || []) as HospitalItem[],
      police: (rawSet.police || []) as PoliceStationItem[],
      rto: (rawSet.rto || []) as RtoOfficeItem[],
      ifsc: (rawSet.ifsc || []) as StateIfscItem[],
      offices: (rawSet.offices || []) as StateGovtOfficeItem[],
      stateName: stateInfo.name,
      isDefaultSample: false,
    };
  }

  // If a state does not have dedicated dataset yet, we return state-specific empty/notice entries rather than confusing Delhi data
  return {
    stateName: stateInfo.name,
    isDefaultSample: true,
    pincodes: [
      {
        pin: '---',
        area: `Directory updates in progress for ${stateInfo.name}. Showing verified state and central resources.`,
        district: stateInfo.capital || stateInfo.name,
        postOffice: `${stateInfo.name} Postal Division`,
        stdCode: '0',
        state: stateInfo.name
      }
    ],
    hospitals: [],
    police: [],
    rto: [],
    ifsc: [],
    offices: []
  };
}

