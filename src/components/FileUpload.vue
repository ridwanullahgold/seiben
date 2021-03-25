<template>
  <div>
    <div class="upload-file mb-16 text-center">
      <div class="square-144 m-auto px-6 mb-7 text-center">
        <picture-input
          ref="pictureInput"
          @change="onChanged"
          @remove="onRemoved"
          :width="1200"
          :removable="true"
          removeButtonClass="btn btn-danger btn-sm"
          :height="1200"
          accept="image/jpeg, image/png, image/gif"
          buttonClass="btn btn-secondary btn-sm"
          :customStrings="{
            upload: '<h1>Upload it!</h1>',
            drag: '<h6>Drag and drop your image here</h6>'
          }"
        >
        </picture-input>
      </div>
    </div>
    <button
      class="btn btn-sm btn-primary"
      @click="attemptUpload"
      v-bind:class="{ disabled: !image }"
    >
      Upload
    </button>
  </div>
</template>

<script>
import PictureInput from "vue-picture-input";
import axios from "axios";
export default {
  name: "FileUpload",
  components: { PictureInput },
  data() {
    return {
      image: "",
      message: ""
    };
  },
  methods: {
    onChanged() {
      if (this.$refs.pictureInput.file) {
        const file = this.$refs.pictureInput.file;
        console.log(file);
        if (file.size > 500000) {
          this.$toastr.w(
            "The image is too large. Maximum size allowed is 500KB",
            "Warning!"
          );
        } else {
          this.image = file;
        }
      } else {
        this.$toastr.w("Old browser. No support for Filereader API", "Error!");
      }
    },
    onRemoved() {
      this.image = "";
    },
    attemptUpload() {
      if (this.image) {
        const formData = new FormData();
        formData.append("file", this.image);
        const config = {
          headers: {
            "content-type": "multipart/form-data"
          }
        };
        axios
          .post("http://localhost:9000/upload", formData, config)
          .then(response => {
            if (response.data.success) {
              this.image = "";
              console.log("Image uploaded successfully ✨");
              this.$toastr.s("Uploaded", "Success!");
            }
          })
          .catch(err => {
            console.error(err);
            this.$toastr.e("Upload failed", "Error!");
          });
      }
    }
  }
};
</script>
