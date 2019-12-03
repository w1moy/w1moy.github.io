function windChill(temp, wspeed) {
		if (temp > 50 || wspeed <= 3) {
			var s = Math.pow(wspeed, .16);
			var f  = 35.74 + (0.6215 * temp) - (35.75 * s) + (.4275 * temp * s);
			var wchill=Math.round(f*10)/10
			return wchill;
		} else {
			return "N/A";
		}
	}