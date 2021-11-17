<template>
  <div class="flex gap wrap a-end" id="booking">
    <div class="date">
      <label>Incheckning</label>
      <div>
        <i class="date material-icons">calendar_today</i>
        <i class="chevron material-icons">expand_more</i>
        <input type="date" :min="dates.today" v-model="checkIn" :max="dates.oneYear" @change="updateDates" />
      </div>
    </div>
    <div class="date">
      <label>Utcheckning</label>
      <div>
        <i class="date material-icons">calendar_today</i>
        <i class="chevron material-icons">expand_more</i>
        <input type="date" :min="dayAfterCheckIn" v-model="checkOut" :max="dates.oneYear" @change="updateDates" />
      </div>
    </div>

    <div class="select">
      <label>Rum och personer</label>
      <div>
        <i class="date material-icons">person</i>
        <i class="chevron material-icons">expand_more</i>
        <select name="" id="" v-model="peopleCount" @change="emitSettings">
          <option value="1">1 rum, 1 vuxen</option>
          <option value="2">1 rum, 2 vuxna</option>
        </select>
      </div>
    </div>
    <button class="green" @click="handleClick">Boka</button>
  </div>
</template>

<script>
import { format, add, compareAsc } from 'date-fns';

export default {
  props: {
    dates: Object,
  },
  data() {
    return {
      checkIn: '',
      checkOut: '',
      peopleCount: '1',
    };
  },
  computed: {
    dayAfterCheckIn() {
      if (!this.checkIn) return '';
      return format(add(new Date(this.checkIn), { days: 1 }), 'yyyy-MM-dd');
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.checkIn = this.dates.checkIn;
      this.checkOut = this.dates.checkOut;
      this.peopleCount = this.dates.people;
    });
  },
  methods: {
    updateDates() {
      if (compareAsc(new Date(this.checkIn), new Date(this.checkOut)) !== -1) {
        this.checkOut = this.dayAfterCheckIn;
      }
      this.emitSettings();
    },
    emitSettings() {
      const payload = { checkIn: this.checkIn, checkOut: this.checkOut, people: this.peopleCount };
      this.$emit('update-settings', payload);
    },
    handleClick() {
      if (this.$route.path === '/') {
        this.$router.push('/rooms');
      } else {
        this.$emit('open-modal');
      }
    },
  },
};
</script>
