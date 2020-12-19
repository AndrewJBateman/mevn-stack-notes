<template>
  <div>
    <div class="d-flex justify-content-center">
      <div class="alert alert-primary border-primary p-2 m-0" role="alert">
        <h4 class="alert-heading text-center">Edit Note</h4>
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
    <form @submit.prevent="updateNote">
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
      <br />
      <div class="row justify-content-center">
        <div class="form-group">
          <div class="col-md-6 d-flex">
            <button class="btn btn-primary mr-4" :disabled="isDisabled">Update</button>
            <button
              type="button"
              class="btn btn-warning mr-4"
              :disabled="!note.title && !note.body"
              @click.prevent="clearInputs()"
            >Clear</button>
            <button type="button" class="btn btn-danger" @click.prevent="backToNotes()">Cancel</button>
          </div>

          <!-- <button class="btn btn-primary">Update</button> -->
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
      isDisabled: false,
      initialBodyLength: 0
    };
  },
  created() {
    const uri = `/notes/edit/${this.$route.params.id}`;
    this.axios.get(uri).then(response => {
      this.note = response.data;
      this.initialBodyLength = this.note.body.length;
      this.remainingCount = 280 - this.initialBodyLength;
      this.calcRemaining();
    });
  },

  methods: {
    updateNote() {
      // this.note.date = Date.now();
      const uri = `/notes/update/${this.$route.params.id}`;
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
    countdown: function() {
      this.calcRemaining();
      this.hasError = this.remainingCount < 5;
      this.isDisabled = this.note.title.length < 4 || this.note.body.length < 4;
    },
    async calcRemaining() {
      this.remainingCount = this.maxCount - this.note.body.length;
    }
  }
};
</script>
