export const time = date => {
    date = new Date(date);
    let seconds = Math.floor((new Date() - date) / 1000);
    let unit;
    let diff = Math.floor(seconds / 31536000);

    if (diff > 0) {
        unit = 'YEAR';
    } else {
        diff = Math.floor(seconds / 2592000);
        if (diff > 0) {
            unit = 'MONTH';
        } else {
            diff = Math.floor(seconds / 86400);
            if (diff > 0) {
                unit = 'DAY';
            } else {
                diff = Math.floor(seconds / 3600);
                if (diff > 0) {
                    unit = "HOUR";
                } else {
                    diff = Math.floor(seconds / 60);
                    if (diff > 0) {
                        unit = "MINUTE";
                    } else {
                        diff = seconds;
                        unit = "SECOND";
                    }
                }
            }
        }
    }

    if (diff > 1) {
        unit += 'S';
    } else if (diff === 0) {
        return 'JUST NOW'
    }

    return diff + ' ' + unit + ' AGO';
};
