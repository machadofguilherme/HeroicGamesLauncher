interface About {
  description: string
  shortDescription: string
}
export interface AppSettings {
  altLegendaryBin: string
  addDesktopShortcuts: boolean
  addStartMenuShortcuts: boolean
  audioFix: boolean
  autoInstallDxvk: boolean
  autoSyncSaves: boolean
  checkForUpdatesOnStartup: boolean
  customWinePaths: Array<string>
  darkTrayIcon: boolean
  defaultInstallPath: string
  discordRPC: boolean
  egsLinkedPath: string
  exitToTray: boolean
  enableEsync: boolean
  enableFSR: boolean
  enableFsync: boolean
  enableResizableBar: boolean
  language: string
  launcherArgs: string
  maxRecentGames: number
  maxSharpness: number
  maxWorkers: number
  nvidiaPrime: boolean
  offlineMode: boolean
  otherOptions: string
  savesPath: string
  showFps: boolean
  showMangohud: boolean
  startInTray: boolean
  useGameMode: boolean
  targetExe: string
  wineCrossoverBottle: string
  winePrefix: string
  wineVersion: WineInstallation
}

export interface ContextType {
  category: string
  data: GameInfo[]
  error: boolean
  filter: string
  filterText: string
  gameUpdates: string[]
  handleCategory: (value: string) => void
  handleFilter: (value: string) => void
  handleGameStatus: (game: GameStatus) => Promise<void>
  handleLayout: (value: string) => void
  handleSearch: (input: string) => void
  layout: string
  libraryStatus: GameStatus[]
  platform: NodeJS.Platform | string
  refresh: () => Promise<void>
  refreshLibrary: (options: RefreshOptions) => void
  refreshing: boolean
}

interface ExtraInfo {
  about: About
  reqs: Reqs[]
}

export interface GameInfo {
  app_name: string
  art_cover: string
  art_logo: string
  art_square: string
  cloud_save_enabled: boolean
  compatible_apps: string[]
  developer: string
  extra: ExtraInfo
  folder_name: string
  install: InstalledInfo
  is_game: boolean
  is_installed: boolean
  is_ue_asset: boolean
  is_ue_plugin: boolean
  is_ue_project: boolean
  namespace: unknown
  save_folder: string
  title: string
  canRunOffline: boolean
}

type DLCInfo = {
  app_name: string
  title: string
}

type LaunchArguments = {
  name: string
  parameters: string
}

type GameInstallInfo = {
  app_name: string
  launch_options: Array<LaunchArguments>
  owned_dlc: Array<DLCInfo>
  title: string
  version: string
}

type Prerequisites = {
  args: string
  name: string
  path: string
}

type GameManifest = {
  app_name: string
  disk_size: number
  download_size: number
  install_tags: Array<string>
  launch_exe: string
  prerequisites: Prerequisites
}
export interface InstallInfo {
  game: GameInstallInfo
  manifest: GameManifest
}

export interface GameStatus {
  appName: string
  progress?: number | null
  status:
    | 'installing'
    | 'updating'
    | 'launching'
    | 'playing'
    | 'uninstalling'
    | 'repairing'
    | 'done'
    | 'canceled'
    | 'moving'
    | 'queued'
    | 'error'
}

export interface InstallProgress {
  bytes: string
  eta: string
  folder?: string
  percent: string
}
export interface InstalledInfo {
  executable: string | null
  install_path: string | null
  install_size: string | null
  is_dlc: boolean | null
  version: string | null
}

export interface KeyImage {
  type: string
}

export interface Path {
  path: string
}

export type RefreshOptions = {
  checkForUpdates?: boolean
  fullRefresh?: boolean
  runInBackground?: boolean
}

interface Reqs {
  minimum: string
  recommended: string
  title: string
}

export type SyncType = 'Download' | 'Upload' | 'Force download' | 'Force upload'

export type UserInfo = {
  account_id?: string
  displayName?: string
  epicId?: string
  name?: string
}
export interface WineInstallation {
  bin: string
  name: string
}

export type ElWebview = {
  goBack: () => void
  goForward: () => void
  reload: () => void
  isLoading: () => boolean
  getURL: () => string
}

export type Webview = HTMLWebViewElement & ElWebview