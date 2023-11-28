export class Timer {
    private startTime: Date;
    public elapsedTime: number = 0;
    private timerInterval: number | null = null;
  
     public start() {
      this.startTime = new Date();
      this.timerInterval = window.setInterval(() => this.tick(), 1000);
    }
  
    stop() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
        this.elapsedTime += new Date().getTime() - this.startTime.getTime();
      }
    }
  
    reset() {
      this.stop();
      this.elapsedTime = 0;
    }
  
    tick() {      
      const currentTime = new Date();
      const timeDiff = currentTime.getTime() - this.startTime.getTime() + this.elapsedTime;
      const seconds = Math.floor((timeDiff / 1000) % 60);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const formattedTime = this.formatTime(minutes, seconds);     
      document.getElementById('timer')!.textContent = formattedTime;
    }
  
    formatTime(minutes: number, seconds: number): string {
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }
  