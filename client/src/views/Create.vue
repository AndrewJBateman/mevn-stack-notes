<template>
  <div>
    <div class="d-flex justify-content-center">
      <div class="alert alert-primary border-primary p-2 m-0" role="alert">
        <h4 class="alert-heading text-center">Create Note</h4>
        <hr class="m-2" />
        <p class="mb-0 text-center">
          You have
          <span
            class="badge badge-pill badge-light text-dark"
            style="font-size: 0.9em;"
            v-bind:class="{'text-danger': hasError }"
          >{{ remainingCount }}</span> characters
        </p>
      </div>
    </div>
    <br />
    <form @submit.prevent="addNote">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="form-group">
            <label>Note Title:</label>
            <input
              id="title"
              type="text"
              class="form-control"
              v-model="note.title"
              minlength="4"
              maxlength="23"
              placeholder="Enter at least 4 characters"
            />
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="form-group">
            <label>Note Body:</label>
            <textarea
              id="body"
              class="form-control"
              v-model="note.body"
              v-on:keyup="countdown"
              minlength="4"
              maxlength="280"
              rows="9"
              placeholder="Enter at least 4 characters"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="form-group">
          <div class="col-md-6 d-flex">
            <button class="btn btn-primary mr-4" :disabled="isDisabled">Create</button>
            <button
              type="button"
              class="btn btn-warning mr-4"
              :disabled="!note.title && !note.body"
              @click.prevent="clearInputs()"
            >Clear</button>
            <button type="button" class="btn btn-danger" @click.prevent="backToNotes()">Cancel</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: {},
      maxCount: 280,
      remainingCount: 280,
      title: "",
      body: "",
      hasError: false,
      isDisabled: true
    };
  },
  methods: {
    addNote() {
      const uri = "/notes/add";
      this.axios.post(uri, this.note).then(() => {
        this.$router.push({ name: "notes" });
      });
    },
    clearInputs() {
      this.note = {};
      this.isDisabled = true;
      this.remainingCount = 280;
    },
    backToNotes() {
      this.$router.push("/");
    },
    countdown: async () => {
      this.remainingCount = this.maxCount - this.note.body.length;
      this.hasError = this.remainingCount < 5;
      this.isDisabled = this.note.title.length < 4 || this.note.body.length < 4;
    }
  }
};
</script>
