/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function (days, meetings) {
    meetings.sort((a, b) => a[0] - b[0]);

    let mergedMeetings = [];

    for (const meeting of meetings) {
        if (mergedMeetings.length === 0 || mergedMeetings[mergedMeetings.length - 1][1] < meeting[0]) {
            mergedMeetings.push(meeting);
        } else {
            mergedMeetings[mergedMeetings.length - 1][1] = Math.max(mergedMeetings[mergedMeetings.length - 1][1], meeting[1]);
        }
    }

    let bookedDays = 0;
    for (const meeting of mergedMeetings) {
        bookedDays += meeting[1] - meeting[0] + 1;
    }

    return days - bookedDays;
};
