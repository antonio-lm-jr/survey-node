export interface SurveyInputDTO {
  question: string;
  description: string;
  startPublish: Date;
  stopPublish: Date;
  options: string[];
}

export interface SurveyOutputDTO {
  reference: string;
  question: string;
  description: string;
  startPublish: Date;
  stopPublish: Date;
  options: { identity: string; opt: string }[];
}
