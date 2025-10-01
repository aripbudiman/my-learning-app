export interface AdminPanelSvc {
    getOverviewData(): Promise<{ name: string; value: number }[]>
}
