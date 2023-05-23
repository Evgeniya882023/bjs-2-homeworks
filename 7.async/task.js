class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		this.time = time;
		this.callback = callback;
		if (!callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		} else if (!time) {
			throw new Error('Отсутствуют обязательные аргументы');
		} else if (this.alarmCollection.find(timeAlarm => timeAlarm.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		this.alarmCollection.push({
			callback,
			time,
			canCall: true,
		})
	}
	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(clocktAlarm => clocktAlarm.time !== time)
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString().slice(0, 5);
	}
	start() {
		if (this.intervalId != null && this.intervalId !== undefined) {
			return;
		} else {
			this.intervalId = setInterval(() => {
				this.alarmCollection.forEach(timeAlarm => {
					if (timeAlarm.time === this.getCurrentFormattedTime() && timeAlarm.canCall === true) {
						timeAlarm.canCall = false;
						timeAlarm.callback();
					}
				}), 1000
			})
		}
	}
	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}
	resetAllCalls() {
		this.alarmCollection.forEach(timeAlarm => {
			timeAlarm.canCall = true;
		})

	}
	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}