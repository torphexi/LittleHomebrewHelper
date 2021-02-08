export interface Class {
  _declaration: Declaration;
  elements: Elements;
}
export interface Declaration {
  _attributes: Attributes;
}
export interface Attributes {
  name: string;
  version: string;
  encoding: string;
  url: string;
  type: string;
  source: string;
  id: string;
  class: string;
  element: string;
  display?: string | null;
  action?: string | null;
  level?: string | null;
  usage?: string | null;
  requirements?: string | null;
  number?: string | null;
  supports: string;
  value: string;
  bonus?: string | null;
  equipped?: string | null;
  alt?: string | null;
}
export interface Elements {
  info: Info;
  element?: (ElementEntity)[] | null;
  _comment?: (string)[] | null;
}
export interface Info {
  name: NameOrDescriptionOrH4EntityOrStrongOrIEntityOrH3OrPrerequisiteOrRequirementsOrLiEntityOrPOrSupports;
  description: NameOrDescriptionOrH4EntityOrStrongOrIEntityOrH3OrPrerequisiteOrRequirementsOrLiEntityOrPOrSupports;
  author: Author;
  update: Update;
}
export interface NameOrDescriptionOrH4EntityOrStrongOrIEntityOrH3OrPrerequisiteOrRequirementsOrLiEntityOrPOrSupports {
  _text: string;
}
export interface Author {
  _attributes: Attributes;
  _text: string;
}
export interface Update {
  _attributes: Attributes;
  file: File;
}
export interface File {
  _attributes: Attributes;
}

export interface ElementEntity {
  _attributes: Attributes;
  description: Description;
  sheet: Sheet;
  setters?: Setters | null;
  rules?: Rules | null;
  multiclass?: Multiclass | null;
  compendium?: SheetOrCompendium | null;
  supports?: NameOrDescriptionOrH4EntityOrStrongOrIEntityOrH3OrPrerequisiteOrRequirementsOrLiEntityOrPOrSupports1 | null;
}

export interface Description {
  p?: (PEntityOrTdEntityOrEntity)[] | null | NameOrDescriptionOrH4EntityOrStrongOrIEntityOrH3OrPrerequisiteOrRequirementsOrLiEntityOrPOrSupports;
  h4?: (NameOrDescriptionOrH4EntityOrStrongOrIEntityOrH3OrPrerequisiteOrRequirementsOrLiEntityOrPOrSupports)[] | null;
  h5?: (H5Entity)[] | null;
  h3?: NameOrDescriptionOrH4EntityOrStrongOrIEntityOrH3OrPrerequisiteOrRequirementsOrLiEntityOrPOrSupports2 | null;
  ul?: (UlEntity)[] | null | Ul;
  table?: Table | null;
  div?: (DivEntity)[] | null;
}
export interface PEntityOrTdEntityOrEntity {
  _text: string;
  _attributes?: Attributes | null;
}

export interface H5Entity {
  _attributes: Attributes;
  _text: string;
}
export interface NameOrDescriptionOrH4EntityOrStrongOrIEntityOrH3OrPrerequisiteOrRequirementsOrLiEntityOrPOrSupports2 {
  _text: string;
}
export interface UlEntity {
  _attributes?: Attributes | null;
  li?: (LiEntity)[] | null;
}
export interface LiEntity {
  strong?: NameOrDescriptionOrH4EntityOrStrongOrIEntityOrH3OrPrerequisiteOrRequirementsOrLiEntityOrPOrSupports3 | null;
  _text?: (string)[] | null | string;
  i?: (NameOrDescriptionOrH4EntityOrStrongOrIEntityOrH3OrPrerequisiteOrRequirementsOrLiEntityOrPOrSupports)[] | null;
}
export interface NameOrDescriptionOrH4EntityOrStrongOrIEntityOrH3OrPrerequisiteOrRequirementsOrLiEntityOrPOrSupports3 {
  _text: string;
}
export interface Ul {
  li?: (NameOrDescriptionOrH4EntityOrStrongOrIEntityOrH3OrPrerequisiteOrRequirementsOrLiEntityOrPOrSupports)[] | null;
}
export interface Table {
  _attributes: Attributes;
  thead: Thead;
  tr?: (TrOrTrEntity)[] | null;
}
export interface Thead {
  tr: TrOrTrEntity;
}
export interface TrOrTrEntity {
  td?: (PEntityOrTdEntityOrEntity)[] | null;
}
export interface DivEntity {
  _attributes: Attributes;
}
export interface Sheet {
  _attributes?: Attributes | null;
  description?: NameOrDescriptionOrH4EntityOrStrongOrIEntityOrH3OrPrerequisiteOrRequirementsOrLiEntityOrPOrSupports | (Entity)[] | null;
}

export interface Entity {
  _attributes?: Attributes | null;
  _text: string;
}

export interface Setters {
  set?: (SetEntityOrSet)[] | null;
}
export interface SetEntityOrSet {
  _attributes: Attributes;
  _text: string;
}
export interface Rules {
  grant?: (GrantEntityOrEntity)[] | null | GrantEntityOrGrant;
  select?: Select | (SelectOrSelectEntity)[] | null;
  stat?: (Entity1)[] | null | Stat;
  _comment?: string | null;
}
export interface GrantEntityOrEntity {
  _attributes: Attributes;
}

export interface GrantEntityOrGrant {
  _attributes: Attributes;
}

export interface Select {
  _attributes: Attributes;
}

export interface SelectOrSelectEntity {
  _attributes: Attributes;
}

export interface Entity1 {
  _attributes: Attributes;
}

export interface Stat {
  _attributes: Attributes;
}

export interface Multiclass {
  _attributes: Attributes;
  prerequisite: NameOrDescriptionOrH4EntityOrStrongOrIEntityOrH3OrPrerequisiteOrRequirementsOrLiEntityOrPOrSupports;
  requirements: NameOrDescriptionOrH4EntityOrStrongOrIEntityOrH3OrPrerequisiteOrRequirementsOrLiEntityOrPOrSupports;
  setters: Setters1;
  rules: Rules1;
}

export interface Setters1 {
  set: SetEntityOrSet;
}
export interface Rules1 {
  grant?: (GrantEntityOrGrant)[] | null;
}
export interface SheetOrCompendium {
  _attributes: Attributes;
}

export interface NameOrDescriptionOrH4EntityOrStrongOrIEntityOrH3OrPrerequisiteOrRequirementsOrLiEntityOrPOrSupports1 {
  _text: string;
}
