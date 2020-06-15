import moment from "moment";

export default class TimeHelper {
  static getMillisecondFromTimeString(dateString, format = "DD-MM-YYYY") {
    return moment(dateString, format).valueOf() / 1000;
  }

  static diffFromNowInSecond(timestamp) {
    const duration = moment(timestamp * 1000) - moment();
    return moment
      .utc(moment.duration(duration).asMilliseconds())
      .format("mm:ss");
  }

  static formatDateTime(timestamp, format = "DD/MM/YYYY HH:mm") {
    return moment.unix(timestamp).format(format);
  }
  static formatDate(timestamp, format = "DD/MM/YYYY") {
    return moment.unix(timestamp / 1000).format(format);
  }

  static diffFromNowInDay(timestamp) {
    const given = moment.unix(timestamp);
    const current = moment().startOf("day");
    return Math.ceil(moment.duration(given.diff(current)).asDays());
  }

  static calendarTime(timestamp) {
    return moment.unix(timestamp).calendar(null, {
      sameDay: "[Hôm nay]",
      nextDay: "[Ngày mai]",
      nextWeek: "DD/MM",
      lastDay: "[Hôm qua]",
      lastWeek: "DD/MM",
      sameElse: "DD/MM"
    });
  }

  static nowInTimestamp() {
    return moment().unix();
  }

  static oneDayBeforeInTimestamp() {
    const startDate = moment();
    startDate.subtract(1, "d");
    startDate.hour(0);
    startDate.minute(0);
    startDate.second(0);
    return startDate.unix();
  }
}
