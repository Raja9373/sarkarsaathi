
export interface Comparison {
  id: string;
  name: string;
  investment1Id: string;
  investment2Id: string;
  attributes: Array<{
    label: string;
    value1: string;
    value2: string;
  }>;
}
