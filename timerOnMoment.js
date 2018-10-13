let fromApi = moment('2018-10-13 23:00:00');
getDifferrentTimer(this.fromApi)



function getDifferrentTimer(finishTime) {
    let timeObject;
    let now;
    setInterval(() => {
        now = moment();
        this.duration = moment.duration(finishTime.diff(now));
        timeObject = {
            hours: this.duration._data.hours,
            minutes: this.duration._data.minutes,
            seconds: this.duration._data.minutes
        };
        console.log(`${getZero(timeObject.hours)}:${getZero(timeObject.minutes)}`);
    }, 1000);

    function getZero(value) {
        if (value < 10) {
            return `0${value}`;
        } else {
            return value;
        }
    }
}