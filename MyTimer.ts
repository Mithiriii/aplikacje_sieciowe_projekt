class MyTimer {
    private time: number;
    private intervalId: number | null;

    constructor(initialTime: number) {
        this.time = initialTime;
        this.intervalId = null;
    }

    public startTimer(): void {
        
        this.intervalId = window.setInterval(() => {
            this.time += 1;
        }, 1000);
    }

    public getCurrentTime(): number {
        return this.time;
    }

    public stopTimer(): void {
        if (this.intervalId !== null) {
            window.clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}


export { MyTimer };
