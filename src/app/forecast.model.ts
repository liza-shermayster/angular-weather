
export interface Forecast {
  Headline: Headline;
  DailyForecasts: DailyForecast[];
}

export interface DailyForecast {
  Date: string;
  EpochDate: number;
  Temperature: Temperature;
  Day: Day;
  Night: Day;
  Sources: string[];
  MobileLink: string;
  Link: string;
}

export interface Day {
  Icon: number;
  IconPhrase: string;
  HasPrecipitation: boolean;
}

export interface Temperature {
  Minimum: Minimum;
  Maximum: Minimum;
}

export interface Minimum {
  Value: number;
  Unit: string;
  UnitType: number;
}

export interface Headline {
  EffectiveDate: string;
  EffectiveEpochDate: number;
  Severity: number;
  Text: string;
  Category: string;
  EndDate?: any;
  EndEpochDate?: any;
  MobileLink: string;
  Link: string;
}
export interface ForecastSearchItem {
  Version: number;
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  Country: Country;
  AdministrativeArea: Country;
}

interface Country {
  ID: string;
  LocalizedName: string;
}
