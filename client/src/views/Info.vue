<template>
  <div class="d-flex justify-content-center">
    <div class="card border-primary" style="max-width: 700px">
      <div class="card-header">
        <h5 class="card-title text-center mb-0">About App</h5>
      </div>
      <div class="card-body text-white bg-secondary p-2">
        <p
          class="card-text"
        >This app displays simple text notes in a responsive grid of Bootstrap cards. It uses the MongoDB, Express, Vue & Node.js (MEVN) stack to allow the user to perform Create, Read, Update and Delete (CRUD) operations.</p>
        <p class="card-text">The 'Notes Hub' tells the user how many notes there are using the notes array.length property.</p>
        <p class="card-text">Once a note is added then the grid of notes is reloaded from the backend database. This was preferred to using an array.splice operation on the front-end data.</p>
      </div>
      <div class="card-footer p-2">
        <small class="text-muted d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-outline-primary btn-sm"
            @click.prevent="backToNotes()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
          </button>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: {}
    };
  },
  created() {},
  methods: {
    backToNotes() {
      this.$router.push("/");
    }
  }
};
</script>
