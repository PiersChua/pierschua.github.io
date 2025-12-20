export interface Project {
  id: number;
  title: string;
  startDate: string;
  endDate?: string;
  cardDesc: string;
  modalDescs: string[];
  problemStatement?: string;
  repository?: string;
  webUrl?: string;
  cardImage: string;
  modalImages: string[];
  type: string;
  skills: string[];
}
