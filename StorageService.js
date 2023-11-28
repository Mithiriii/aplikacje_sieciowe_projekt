export class StorageService {
    static saveResults(score) {
        const results = StorageService.loadResults();
        results.push(score);
        localStorage.setItem(StorageService.resultsKey, JSON.stringify(results));
    }
    static loadResults() {
        const results = localStorage.getItem(StorageService.resultsKey);
        return results ? JSON.parse(results) : [];
    }
    static saveDetailedStatistics(statistics) {
        localStorage.setItem('detailedStatistics', JSON.stringify(statistics));
    }
    static loadDetailedStatistics() {
        const statistics = localStorage.getItem('detailedStatistics');
        return statistics ? JSON.parse(statistics) : [];
    }
}
StorageService.resultsKey = 'quizResults';
