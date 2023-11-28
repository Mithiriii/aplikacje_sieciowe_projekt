export class StorageService {
    private static readonly resultsKey = 'quizResults';
  
    public static saveResults(score: number): void {
      const results = StorageService.loadResults();
      results.push(score);
      localStorage.setItem(StorageService.resultsKey, JSON.stringify(results));
    }
  
    public static loadResults(): number[] {
      const results = localStorage.getItem(StorageService.resultsKey);
      return results ? JSON.parse(results) : [];
    }

    public static saveDetailedStatistics(statistics: any[]): void {
        localStorage.setItem('detailedStatistics', JSON.stringify(statistics));
      }
    
      public static loadDetailedStatistics(): any[] {
        const statistics = localStorage.getItem('detailedStatistics');
        return statistics ? JSON.parse(statistics) : [];
      }
  }
  