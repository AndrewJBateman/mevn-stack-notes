<template>
  <div class="d-flex justify-content-center">
    <div class="card border-primary" style="max-width: 700px">
      <div class="card-header" style="background-color: #cce5ff">
        <h5 class="card-title text-center mb-0">About App</h5>
      </div>
      <div class="card-body text-white bg-secondary p-2">
        <p
          class="card-text"
        >This app displays simple text notes in a responsive grid of Bootstrap cards. It uses the MongoDB, Express, Vue & Node.js (MEVN) stack to allow the user to perform Create, Read, Update and Delete (CRUD) operations.</p>
        <p
          class="card-text"
        >The 'Notes Hub' tells the user how many notes there are using the notes array.length property.</p>
        <p
          class="card-text"
        >Once a note is added then the grid of notes is reloaded from the backend database. This was preferred to using an array.splice operation on the front-end data.</p>
        <p
          class="card-text"
        >Axios, a promise-based HTTP client, is used to send/receive data asynchronously from the MongoDB backend.</p>
        <p
          class="card-text"
        >The note create page includes a character countdown display to show the user how many characters are left from the 280 character maximum (same max. length as a Twitter tweet). There are buttons to Create (save to the database), Clear both input fields and Cancel to return to the Notes List page. The note edit page is very similar and also calculates the note body characters left.</p>
      </div>
      <div class="card-footer p-2" style="background-color: #cce5ff">
        <div class="text-muted d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-outline-dark"
            @click.prevent="backToNotes()"
          >
            <img
              src="../assets/static/arrow_back-24px.svg"
              alt="button to navigate back to list of notes"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
