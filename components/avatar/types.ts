

export interface Options {
  ant?: (| '1'| '2'| '3'| '4'| '5'| '6')[];
  face?: (| '1'| '2'| '3'| '4'| '5'| '6'| '7')[];
  eye?: (| '1'| '2'| '3'| '4'| '5'| '6'| '7'| '8'| '9'| '10'| '11'| '12'| '13')[];
  mouth?: (| '1'| '2'| '3'| '4'| '5')[];
  faceColor?: string[];
}

export type ColorPickCollection = Record<string, string>;
export type ComponentGroup = Record<string, ComponentGroupItem>;
export type ComponentGroupCollection = Record<string, ComponentGroup>;
export type ComponentGroupItem = (components: ComponentPickCollection,colors: ColorPickCollection) => string;
export type ComponentPickCollection = Record<string, ComponentPick>;
export type ComponentPick = | {name: string;value: ComponentGroupItem;}| undefined;
