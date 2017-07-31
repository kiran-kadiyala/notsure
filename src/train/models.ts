export type Train = {
  id?: number;
  currentStep?:number;
  model?: string;
  dataSet?:string;
  projectName?:string;
  newOrExistingProject?:string;
  completed?: boolean;
};

export type IState = Train[];
