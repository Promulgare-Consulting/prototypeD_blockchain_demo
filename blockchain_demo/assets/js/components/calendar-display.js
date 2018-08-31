parasails.registerComponent('calendar-display', {

	data: function () {
	    return {
		    month: _todayComps.month,
    		year: _todayComps.year,
    	}
  	},

	created() {
		this.$on('configureDay', this.configureDay);
		this.$on('selectDay', this.selectDay);
	},

	template: `
		<div class='calendar'>
		  <div class='header'>
		    <span class='title' @click='moveThisMonth'>
		      {{ header.label }}
		    </span>
		  </div>
		  <div class='weekdays'>
		    <div class="weekday" v-for='weekday in weekdays'>
		      {{ weekday.label_3 }}
		    </div>
		  </div>
		  <div class='week' v-for='week in weeks'>
		    <div
		      class='day'
		      :class='{ today: day.isToday, "not-in-month": !day.inMonth, "selected": day.isSelected }'
		      v-for='day in week'
		      @click='$emit("selectDay", day)'
		      @mouseenter='$emit("enterDay", day)'
		      @mouseleave='$emit("leaveDay", day)'>
		      {{ day.label }}
              <div style="font-size: .5em; width: 50px;">{{ day.booking }}</div>
		    </div>
		  </div>
		</div>
	`,


  	props: {
    	value: Date,
  	},

	computed: {
	  // Our component exposes month as 1-based, but sometimes we need 0-based
	  monthIndex() {
	    return this.month - 1;
	  },
	  // State referenced by header (no dependencies yet...)
	 months() {
	    return _monthLabels.map((ml, i) => ({
	      label: ml,
	      label_1: ml.substring(0, 1),
	      label_2: ml.substring(0, 2),
	      label_3: ml.substring(0, 3),
	      number: i + 1,
	    }));
	  },
	  // State for weekday header (no dependencies yet...)
	  weekdays() {
	    return _weekdayLabels.map((wl, i) => ({
	      label: wl,
	      label_1: wl.substring(0, 1),
	      label_2: wl.substring(0, 2),
	      label_3: wl.substring(0, 3),
	      number: i + 1,
	    }));
	  },
  	  // State for calendar header
	  header() {
	    const month = this.months[this.monthIndex];
	    return {
	      month,
	      year: this.year.toString(),
	      shortYear: this.year.toString().substring(2, 4),
	      label: month.label + ' ' + this.year,
	    };
	  },
	  // Returns number for first weekday (1-7), starting from Sunday
	  firstWeekdayInMonth() {
	    return new Date(this.year, this.monthIndex, 1).getDay() + 1;
	  },
	
	  // Returns number of days in the current month
	  daysInMonth() {
	    // Check for February in a leap year
	    if (this.month === 2 && this.isLeapYear) return 29;
	    // ...Just a normal month
	    return _daysInMonths[this.monthIndex];
	  },

	  isLeapYear() {
	    return (this.year % 4 === 0 && this.year % 100 !== 0) || this.year % 400 === 0;
	  },
	  // Data components for previous month
	  previousMonthComps() {
	    if (this.month === 1) return {
	      days: _daysInMonths[11],
	      month: 12,
	      year: this.year - 1,
	    }
	    return {
	      days: (this.month === 3 && this.isLeapYear) ? 29 : _daysInMonths[this.monthIndex - 1],
	      month: this.month - 1,
	      year: this.year,
	    };
	  },
	  // Data components for next month
	  nextMonthComps() {
	    if (this.month === 12) return {
	      days: _daysInMonths[0],
	      month: 1,
	      year: this.year + 1,
	    };
	    return {
	      days: (this.month === 1 && this.isLeapYear) ? 29 : _daysInMonths[this.monthIndex + 1],
	      month: this.month + 1,
	      year: this.year,
	    };
	  },

	  weeks() {
	    const weeks = [];
	    let previousMonth = true, thisMonth = false, nextMonth = false;
	    let day = this.previousMonthComps.days - this.firstWeekdayInMonth + 2;
	    let month = this.previousMonthComps.month;
	    let year = this.previousMonthComps.year;
	    // Cycle through each week of the month, up to 6 total
	    for (let w = 1; w <= 6 && !nextMonth; w++) {
	      // Cycle through each weekday
	      const week = [];
	      for (let d = 1; d <= 7; d++) {

	        // We need to know when to start counting actual month days
	        if (previousMonth && d >= this.firstWeekdayInMonth) {
	          // Reset day/month/year counters
	          day = 1;
	          month = this.month;
	          year = this.year;
	          // ...and flag we're tracking actual month days
	          previousMonth = false;
	          thisMonth = true;
	        }

	        // Append day info for the current week
	        // Note: this might or might not be an actual month day
	        //  We don't know how the UI wants to display various days,
	        //  so we'll supply all the data we can
	        const dayInfo = {
	          label: (day && thisMonth) ? day.toString() : '',
	          booking: '',
	          day,
	          weekday: d,
	          week: w,
	          month,
	          year,
	          date: new Date(year, month - 1, day),
	          beforeMonth: previousMonth,
	          afterMonth: nextMonth,
	          inMonth: thisMonth,
	          isToday: day === _todayComps.day && month === _todayComps.month && year === _todayComps.year,
	          isFirstDay: thisMonth && day === 1,
	          isLastDay: thisMonth && day === this.daysInMonth,
	        };
	        this.$emit('configureDay', dayInfo); // <=== THIS IS THE NEW EVENT WE RAISE NOW
	        week.push(dayInfo);

	        // We've hit the last day of the month
	        if (thisMonth && day >= this.daysInMonth) {
	          thisMonth = false;
	          nextMonth = true;
	          day = 1;
	          month = this.nextMonthComps.month;
	          year = this.nextMonthComps.year;
	        // Still in the middle of the month (hasn't ended yet)
	        } else {
	          day++;
	        }
	      }
	      // Append week info for the month
	      weeks.push(week);
	    }
	    return weeks;
	  },

	    hasValue() {
	      	return this.value && typeof this.value.getTime === 'function';
	    },
	    valueTime() {
	      	return this.hasValue ? this.value.getTime() : null;
	    },	  // End of computed properties
	},  

	methods: {

		moveThisMonth() {
    		this.month = _todayComps.month;
    		this.year = _todayComps.year;
  		},

  		refreshMonth: function() {
			this.moveThisMonth();  			
  		},

	  	formatReserveDate: function(day) {
	  		var formatted = day.year.toString()+day.month.toString().padStart(2, '0')+day.day.toString().padStart(2, '0');
	  		return formatted;
	  	},

	  	configureDay(day) {
	    	this.$parent.$parent.bookingInfo(day.isSelected ? null : this.formatReserveDate(day), day);
	  	},

	  	selectDay(day) {
	  		day.booking="Click";
	  	  	this.$emit('input', day.isSelected ? null : day.date);
	  	  	this.$parent.$parent.daySelected(day.isSelected ? null : this.formatReserveDate(day), day);
	  	},
	},

});