export type CaipAddress = `${string}:${string}:${string}`;

export type CaipNetworkId = `${string}:${string}`;

export interface CaipNetwork {
  id: CaipNetworkId;
  name?: string;
  imageId?: string;
  imageUrl?: string;
}

export interface LinkingRecord {
  redirect: string;
  href: string;
}

export type ProjectId = string;

export type Platform = 'mobile' | 'web' | 'qrcode' | 'unsupported';

export type ConnectorType = 'EXTERNAL' | 'WALLET_CONNECT';

export type CaipNamespaces = Record<
  string,
  {
    chains: CaipNetworkId[];
    methods: string[];
    events: string[];
  }
>;

export type SdkVersion = `react-native-${string}`;

// -- ApiController Types -------------------------------------------------------
export interface WcWallet {
  id: string;
  name: string;
  homepage?: string;
  image_id?: string;
  image_url?: string;
  order?: number;
  mobile_link?: string | null;
  desktop_link?: string | null;
  webapp_link?: string | null;
  app_store?: string | null;
  play_store?: string | null;
}

export interface DataWallet {
  id: string;
  ios_schema?: string;
  android_app_id?: string;
}

export interface ApiGetWalletsRequest {
  page: number;
  entries: number;
  search?: string;
  include?: string[];
  exclude?: string[];
}

export interface ApiGetWalletsResponse {
  data: WcWallet[];
  count: number;
}

export interface ApiGetDataWalletsResponse {
  data: DataWallet[];
  count: number;
}

export type ThemeMode = 'dark' | 'light' | 'system';

// TODO: move to a new common package
export interface ThemeVariables {
  'accent-100'?: string;
  'accent-090'?: string;
  'accent-020'?: string;
  'accent-glass-090'?: string;
  'accent-glass-080'?: string;
  'accent-glass-020'?: string;
  'accent-glass-015'?: string;
  'accent-glass-010'?: string;
  'accent-glass-005'?: string;
  'accent-glass-002'?: string;

  'fg-100'?: string;
  'fg-125'?: string;
  'fg-150'?: string;
  'fg-175'?: string;
  'fg-200'?: string;
  'fg-225'?: string;
  'fg-250'?: string;
  'fg-275'?: string;
  'fg-300'?: string;

  'bg-100'?: string;
  'bg-125'?: string;
  'bg-150'?: string;
  'bg-175'?: string;
  'bg-200'?: string;
  'bg-225'?: string;
  'bg-250'?: string;
  'bg-275'?: string;
  'bg-300'?: string;

  'inverse-100'?: string;
  'inverse-000'?: string;

  'success-100'?: string;
  'error-100'?: string;

  'gray-glass-001'?: string;
  'gray-glass-002'?: string;
  'gray-glass-005'?: string;
  'gray-glass-010'?: string;
  'gray-glass-015'?: string;
  'gray-glass-020'?: string;
  'gray-glass-025'?: string;
  'gray-glass-030'?: string;
  'gray-glass-060'?: string;
  'gray-glass-080'?: string;
  'gray-glass-090'?: string;

  'icon-box-bg-error-100'?: string;
  'icon-box-bg-success-100'?: string;
}

// -- BlockchainApiController Types ---------------------------------------------
export interface BlockchainApiIdentityRequest {
  caipChainId: CaipNetworkId;
  address: string;
}

export interface BlockchainApiIdentityResponse {
  avatar: string;
  name: string;
}

// -- OptionsController Types ---------------------------------------------------
export interface Token {
  address: string;
  image?: string;
}

export type Tokens = Record<CaipNetworkId, Token>;

export type CustomWallet = Pick<
  WcWallet,
  | 'id'
  | 'name'
  | 'homepage'
  | 'image_url'
  | 'mobile_link'
  | 'desktop_link'
  | 'webapp_link'
  | 'app_store'
  | 'play_store'
>;
